
import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODS,
  RECEIVE_SHOPS,

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
}
