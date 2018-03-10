<template>
  <div>
    <div class="order">
      <HeaderTop title="我的订单有哪些"></HeaderTop>
      <section class="order_no_login">
        <img src="./others/person.png">
        <h3>登录后查看外卖订单</h3>
        <router-link to="/login" class="button">立即登陆</router-link>
      </section>
    </div>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
	export default {
  	components:{
      HeaderTop
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .order  //订单
    width 100%

    .order_no_login
      padding-top 140px
      width 60%
      margin 0 auto
      text-align center
      >img
        display block
        width 100%
        height 30%
      >h3
        padding 10px 0
        font-size 17px
        color #6a6a6a
      >.button
        display inline-block
        background #02a774
        font-size 16px
        color #fff
        border 0
        outline none
        border-radius 5px
        padding 10px 20px
</style>
