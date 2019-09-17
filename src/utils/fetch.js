
import axios from 'axios'

const server = axios.create({
  baseURL: '/api',
  timeout: 10000
})

axios.defaults.timeout = 1000000000
server.interceptors.request.use(config => {
  console.log(config)
  return config
}, error => {
  Promise.reject(error)
})

server.interceptors.response.use(response => {
  console.log(response)
  return response
},
error => {
  return Promise.reject(error)
}
)

export default server
