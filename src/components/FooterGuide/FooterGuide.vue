<template>
  <div class="footer">
    <a href="javascript:" class="guide_item" @click="goto('/msite')" :class="{on:this.$route.path=='/msite'}">
			<span>
				<i class="iconfont icon-waimai"></i>
			</span>
      <span>外卖首页</span>
    </a>
    <a href="javascript:" class="guide_item" @click="goto('/search')" :class="{on:this.$route.path=='/search'}">
			<span>
				<i class="iconfont icon-search"></i>
			</span>
      <span>搜素</span>
    </a>
    <a href="javascript:" class="guide_item" @click="goto('/order')" :class="{on:this.$route.path=='/order'}">
			<span>
				<i class="iconfont icon-dingdan"></i>
			</span>
      <span>订单</span>
    </a>
    <a href="javascript:" class="guide_item" @click="goto('/profile')" :class="{on:this.$route.path=='/profile'}">
			<span>
				<i class="iconfont icon-geren"></i>
			</span>
      <span>个人中心</span>
    </a>
  </div>
</template>

<script>
	export default {
    methods:{
    	goto(path){
    		this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer
    top-border-1px(#8b8b8d)
    position fixed
    bottom 0
    left 0
    right 0
    background #fff
    height: 50px
    display flex

    .guide_item
      color #888
      display flex
      flex 1
      align-items center
      flex-direction column
      flex-wrap wrap
      margin 5px 0
      span
        font-size 12px
      .iconfont
        font-size 24px
      &.on
        color #02a774

</style>
