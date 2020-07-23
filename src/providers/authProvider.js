import {dataProvider} from '../App'

export default {
  login: async (params) => {
    const {
      data: {accessToken, refreshToken, role}
    } = await dataProvider('LOGIN', 'auth', {data: params})
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('refreshToken', refreshToken)
    localStorage.setItem('role', role)
    return Promise.resolve(role)
  },
  logout: () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('role')
    return Promise.resolve()
  },
  checkError: (params) => {
    const {status} = params
    if (status === 401 || status === 403) {
      return Promise.reject()
    }
    return Promise.resolve()
  },
  checkAuth: (params) => {
    if (params && params.role === 'guest') {
      return Promise.resolve()
    }
    if (localStorage.getItem('accessToken')) {
      return Promise.resolve()
    }
    return Promise.reject()
  },
  getPermissions: () => {
    const role = localStorage.getItem('role')
    if (role) {
      return Promise.resolve(role)
    }
    return Promise.resolve('guest')
  }
}
