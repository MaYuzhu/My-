<template>
	<div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-remove_circle_outline" v-if="food.count" @click="updateFoodCount(false)"></div>
    </transition>

    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-add_circle" @click.stop="updateFoodCount(true)"></div>

  </div>
</template>
<p></p>
<script>
	export default {
		props:{
			food:Object
    },
    methods:{
      updateFoodCount (isAdd) {
      	const {food} = this
        this.$store.dispatch('updateFoodCount',{food,isAdd})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cartcontrol
    font-size: 0

    .icon-remove_circle_outline
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color #5859aa
      &.move-enter-active, &.move-leave-active
        transition  all 0.3s
      &.move-enter, &.move-leave-to
        opacity 0
        transform translate(30px,0) rotate(90deg)

    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 16px
      color: rgb(147, 153, 159)
    .icon-add_circle
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color #5859aa
</style>
