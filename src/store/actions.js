import {
  reqAddress,
  reqFoods,
  reqShops,
  reqUserinfo,
  reqShopInfo,
  reqShopRatings,
  reqShopGoods,

} from '../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCRMENT_FOOD_COUNT,
  DECRMENT_FOOD_COUNT,
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
  // 异步获取商家信息
  async getShopInfo({commit}){
    const result = await reqShopInfo()
    if(result.code===0){
      const info = result.data
      commit(RECEIVE_INFO,{info})
    }
  },
  // 异步获取商家评价列表
  async getShopRatings({commit}){
    const result = await reqShopRatings()
    if(result.code===0){
      const ratings = result.data
      commit(RECEIVE_RATINGS,{ratings})
    }
  },
  // 异步获取商家商品列表
  async getGoods({commit},cb){
    const result = await reqShopGoods()
    if(result.code===0){
      const goods = result.data
      commit(RECEIVE_GOODS,{goods})
      cb && cb()
    }
  },
  //购物车加减
  updateFoodCount ({commit},{food,isAdd}){
    if(isAdd){
      commit(INCRMENT_FOOD_COUNT,{food})
    }else {
      commit(DECRMENT_FOOD_COUNT,{food})
    }

  },
}
