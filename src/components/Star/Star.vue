<template>
  <div class="star" :class="`star-${size}`">
    <span class="star-item" v-for="(sc,index) in starClass" :key="index" :class="sc"></span>
  </div>
</template>

<script>
  const CLASS_ON = 'on'
  const CLASS_HALF = 'half'
  const CLASS_OFF = 'off'

	export default {
    props:{
      score:Number,
      size:Number
    },
    computed:{

    	starClass(){
    		const sc = []
        const {score} = this
        const num1 = Math.floor(score)
        for (var i = 0; i < num1; i++) {
          sc.push(CLASS_ON)
        }
        if(score*10-num1*10>=5){
          sc.push(CLASS_HALF)
        }
        for (var i = sc.length; i < 5; i++) {
          sc.push(CLASS_OFF)
        }

    		return sc
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixinsls.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./stars/star48_on')
        &.half
          bg-image('./stars/star48_half')
        &.off
          bg-image('./stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./stars/star36_on')
        &.half
          bg-image('./stars/star36_half')
        &.off
          bg-image('./stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./stars/star24_on')
        &.half
          bg-image('./stars/star24_half')
        &.off
          bg-image('./stars/star24_off')
</style>
