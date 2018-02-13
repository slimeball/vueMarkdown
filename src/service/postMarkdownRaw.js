import * as status from './config'

let url = status.DOMAIN + '/markdown/raw'
// let url = '/json/a.json'

const post = ($http, params) => {
  return new Promise((resolve, reject) => {
    $http.post(url, params, { headers: { 'Content-Type': 'text/plain' } }).then(
      response => {
        let re = response.body
        if (re.Success) {
          resolve(status.SUCCESS)
        } else {
          reject(re)
        }
      },
      response => {
        reject(status.ERROR)
      })
  })
}

export default {
  post: ($http, params) => {
    return post($http, params)
  }
}