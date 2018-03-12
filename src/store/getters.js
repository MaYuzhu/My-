export default {
  totalCount (state) {
    return state.cartFoods.reduce((porTotal,food)=>{
      return porTotal + food.count
    },0)
  },
  totalPrice (state) {
    return state.cartFoods.reduce((porTotal,food)=>{
      return porTotal + food.count*food.price
    },0)
  }
}
