import axios from 'axios'
const URL = 'link'
const AUTH_TOKEN = window.localStorage.getItem('token')


export const authApi = (type, url, params) =>
  new Promise((resolve, reject) =>
    axios({
      method: type,
      url: `${URL}/${url}`,
      data: { ...params },
    }).then(({ data }) => resolve(data))
    .catch(err => reject(err))
  )
