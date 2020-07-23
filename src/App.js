import React from 'react'
import {createBrowserHistory} from 'history'
import {Admin, Resource} from 'react-admin'
import authProvider from './providers/authProvider'
import _dataProvider from './providers/data'
import i18nProvider from './providers/i18n'
import administrators from './components/administrators'
import Auth from './custom/auth'
import Layout from './custom/Layout'

export const history = createBrowserHistory()
export const dataProvider = _dataProvider(process.env.REACT_APP_BASE_URL)

const App = () => {
  return (
    <Admin
      title={process.env.REACT_APP_TITLE}
      loginPage={Auth}
      layout={Layout}
      authProvider={authProvider}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      history={history}
    >
      {(permissions) => [
        <Resource name="administrators" {...administrators} />,
      ]}
    </Admin>
  )
}

export default App
