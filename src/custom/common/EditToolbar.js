import React from 'react'
import {DeleteWithConfirmButton, SaveButton, Toolbar} from 'react-admin'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  defaultToolbar: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between'
  }
})

export default (props) => {
  const classes = useStyles()
  return (
    <Toolbar {...props} className={classes.defaultToolbar}>
      <SaveButton submitOnEnter={false} />
      <DeleteWithConfirmButton {...props} submitOnEnter={false} />
    </Toolbar>
  )
}
