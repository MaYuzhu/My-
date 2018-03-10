import {
  reqAddress,
  reqFoods,
  reqShops,
  reqUserinfo,
} from '../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
} from './mutation-types'

export default {
  async getAddress({commit,state}){
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    commit(RECEIVE_ADDRESS,{address:result.data})
  },
  async getFoodType({commit},callback){
    const result = await reqFoods()
    commit(RECEIVE_FOODS,{foodType:result.data})
    callback && callback()
  },
  async getShops({commit,state}){
    const {latitude,longitude} = state
    const result = await reqShops({latitude,longitude})
    commit(RECEIVE_SHOPS,{shops:result.data})
  },
  recUserInfo({commit},userInfo){
    commit(RECEIVE_USER_INFO,{userInfo})
  },
  async getUserInfo({commit}){
    const result = await reqUserinfo()
    if(result.code===0){
      commit(RECEIVE_USER_INFO,{userInfo:result.data})
    }
  },
}
