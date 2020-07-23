import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {getResources, MenuItemLink, usePermissions} from 'react-admin'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import ViewModuleIcon from '@material-ui/icons/ViewModule'
import TocIcon from '@material-ui/icons/Toc'
import SubMenu from './SubMenu'

const menus = [
  {
    title: '시스템 관리',
    items: ['administrators'],
    names: ['관리자 관리'],
    roles: [
      ['master', 'admin'],
    ]
  }
]

const Menu = ({onMenuClick, dense}) => {
  const history = useHistory()
  const [state, setState] = useState({
    menus: menus.map(({items}) => ({selected: !!items.find((item) => history.location.pathname.indexOf(item) > 0)}))
  })
  const resources = useSelector(getResources)
  const handleToggle = (index) => {
    state.menus[index].selected = !state.menus[index].selected
    setState((state) => ({...state}))
  }
  const {permissions} = usePermissions()
  const open = useSelector((state) => state.admin.ui.sidebarOpen)
  return menus
    .filter((menu) => menu.roles.filter((item) => (item ? item.indexOf(permissions) > -1 : true)).length)
    .map((menu, index) => {
      const items = menu.items.map((item, index) => {
        const resource = resources.find((resource) => resource.name === item)
        if (!resource) return null
        if (!menu.roles[index] || menu.roles[index].indexOf(permissions) > -1) {
          if (resource) {
            return (
              <MenuItemLink
                key={index}
                to={`/${resource.name}`}
                leftIcon={resource.icon ? <resource.icon /> : <TocIcon />}
                primaryText={menu.names[index]}
                dense={dense}
                onClick={onMenuClick}
              />
            )
          }
          return (
            <MenuItemLink
              disabled
              key={index}
              to="/"
              leftIcon={resource.icon ? <resource.icon /> : <TocIcon />}
              primaryText={`${item} (개발)`}
              dense={dense}
              onClick={onMenuClick}
            />
          )
        }
        return null
      })
      return (
        <SubMenu
          key={index}
          isOpen={state.menus[index].selected}
          handleToggle={() => handleToggle(index)}
          icon={<ViewModuleIcon />}
          sidebarIsOpen={open}
          name={menu.title}
          dense={dense}
        >
          {items}
        </SubMenu>
      )
    })
}

Menu.propTypes = {
  onMenuClick: PropTypes.func,
  logout: PropTypes.object
}

export default Menu
