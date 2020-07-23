import {CREATE, DELETE, GET_LIST, GET_MANY, GET_ONE, UPDATE} from 'react-admin'

export function request(apiUrl, type, params) {
  let url = `${apiUrl}/admin/administrators`
  const options = {}
  switch (type) {
    case CREATE:
      options.method = 'POST'
      options.data = params.data
      break

    case GET_LIST:
      const {page, perPage} = params.pagination
      const {field, order} = params.sort
      options.params = {
        ...params.filter,
        sort: field,
        order,
        start: (page - 1) * perPage,
        perPage
      }
      break

    case GET_MANY:
      options.params = params
      break
    case GET_ONE:
      url += `/${params.id}`
      break
    case UPDATE:
      url += `/${params.id}`
      options.method = 'PUT'
      options.data = params.data
      break
    case DELETE:
      url += `/${params.id}`
      options.method = 'DELETE'
      break
    default:
      break
  }
  return {url, ...options}
}

export function response(res, type, params) {
  let ret = {}
  const {data} = res
  switch (type) {
    case UPDATE:
      ret = params
      break
    case GET_MANY:
    case GET_LIST:
      ret = data
      break
    case GET_ONE:
      ret = {data}
      break
    case DELETE:
      ret = {data: params}
      break
    default:
      if (data) ret = {data}
      break
  }
  return ret
}
