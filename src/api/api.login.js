import fetch from '../utils/fetch'

import querystring from 'querystring'
const baseURL = 'http://gw.dev.duiopen.com'
const AuthToken = '6941ae51375f6da82eade3d6c566a7d3'
// 微信登陆
export const login = params => {
  fetch.defaults.headers['Auth-token'] = AuthToken
  fetch.defaults.baseURL = baseURL
  return fetch.post('/account/internal/external/mobileApp/wechat2login', params).then(res => {
    return res.data
  }).catch(error => {
    return {
      code: 500,
      msg: error
    }
  })
}

// 微信登陆
export const oauth = params => {
  fetch.defaults.headers['openID'] = '1000002065'
  fetch.defaults.baseURL = 'http://oauth2.t.duiopen.com'
  fetch.defaults.headers['Accept'] = 'application/x-www-form-urlencoded'
  return fetch.get(`/oauth/code?${querystring.stringify(params)}`).then(res => {
    return res.data
  }).catch(error => {
    return {
      code: 500,
      msg: error
    }
  })
}

// 账号关联
export const wxrRelate = params => {
  fetch.defaults.headers['Auth-token'] = AuthToken
  fetch.defaults.baseURL = baseURL
  return fetch.post('/account/internal/external/mobileApp/wechat2login/correlate', params).then(res => {
    return res.data
  }).catch(error => {
    return {
      code: 500,
      msg: error
    }
  })
}

// 发送验证码
export const getVerifyCode = params => {
  fetch.defaults.headers['Auth-token'] = AuthToken
  fetch.defaults.baseURL = baseURL
  return fetch.post('/account/internal/external/mobileApp/verifyCode', params).then(res => {
    return res.data
  }).catch(error => {
    return {
      code: 500,
      msg: error
    }
  })
}

