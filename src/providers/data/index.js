import axios from 'axios'

const models = {
  administrators: require('./administrators'),
}

async function refreshToken(apiUrl) {
  try {
    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')
    if (accessToken && refreshToken) {
      const options = models.auth.request(apiUrl, 'REFRESH', {data: {accessToken, refreshToken}})
      const {data} = await axios(options)
      return data.accessToken
    }
  } catch (e) {
    throw e
  }
}

export default function (apiUrl) {
  const httpClient = (options = {}) => {
    if (!options.headers) options.headers = {}
    const token = localStorage.getItem('accessToken')
    if (token) options.headers.authorization = `Bearer ${token}`
    return axios(options)
  }

  return async function (type, resource, params) {
    const resourceModel = models[resource]
    const options = await resourceModel.request(apiUrl, type, params)
    try {
      const response = await httpClient(options)
      return resourceModel.response(response, type, params)
    } catch (e) {
      if (e && e.response && e.response.status === 401) {
        try {
          const accessToken = await refreshToken(apiUrl, e)
          if (accessToken) {
            localStorage.setItem('accessToken', accessToken)
            const response = await httpClient(options)

            return resourceModel.response(response, type, params)
          }
        } catch (e) {
          throw e.response
        }
      }

      if (e && e.response && e.response.status === 500 && resource === 'categories') {
        throw new Error('하위 카테고리를 먼저 삭제한 후 다시 시도해주세요.')
      }
      throw e.response
    }
  }
}
