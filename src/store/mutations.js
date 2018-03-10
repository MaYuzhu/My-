
import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address = address
  },
  [RECEIVE_FOODS](state,{foodType}){
    state.foodType = foodType
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo = userInfo
  },
}
