
import * as types from '../mutation-types'
import { oauth } from '@/api/api.login'
const state = {
  userInfo: {
    name: 'zhangsan'
  }
}

const mutations = {
  [types.SET_USER_INFO] (state, data) {
    state.userInfo = data
  }
}

const actions = {
  async getUserInfo ({ commit, state, dispath }) {
    const result = await new Promise((resolve, reject) => {
      oauth(
        {
          'response_type': 'code',
          'client_id': 's6Bhd',
          'redirect_uri': 'http://dui.callback',
          'scope': 'all',
          'state': 'xyz',
          'code_challenge': '8cwGANEcx4UEc-iSMaqiulCjKSaRNJINaqoIYO_xq7I',
          'code_challenge_method': 'S256'
        }
      ).then(res => {
        console.log(res)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
      // commit('setUserInfo', { name: 'Abiel' })
      // resolve({ name: 'Abiel' })
    })
    return result
  }
}

const getters = {
  userInfo: state => state.userInfo
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
