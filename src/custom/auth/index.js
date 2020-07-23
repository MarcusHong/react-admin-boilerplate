import React from 'react'
import {ThemeProvider} from '@material-ui/styles'
import {createMuiTheme} from '@material-ui/core/styles'
import Login from './Login'
import {lightTheme} from '../themes'

const Auth = (props) => {
  return (
    <ThemeProvider theme={createMuiTheme(lightTheme)}>
      <Login {...props} />
    </ThemeProvider>
  )
}

export default Auth
