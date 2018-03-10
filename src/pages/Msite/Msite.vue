<template>
    <div class="msite">
        <!--首页头部-->
        <!--<header class="msite_header">
          <a class="header_search">
            <i class="iconfont icon-sousuo"></i>
          </a>
          <a class="header_title">
            <span class="header_title_text ellipsis">昌平区北七家宏福科技园(337省道北)</span>
          </a>
          <a class="header_login">
            <span class="header_login_text">登录|注册</span>
          </a>
        </header>-->
        <HeaderTop :title="address.name">
          <a class="header_search" slot="search">
            <i class="iconfont icon-sousuo"></i>
          </a>
          <a class="header_login" slot="login">
            <router-link to="/login" class="header_login_text">登录|注册</router-link>
          </a>
        </HeaderTop>

        <!--首页导航-->
        <nav class="msite_nav border-1px">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(cs,index) in foodTypeArr" :key="index">
                <a href="javascript:" class="link_to_food" v-for="(c,index2) in cs" :key="index2">
                  <div class="food_container">
                    <img :src="imgBaseUrl+c.image_url">
                  </div>
                  <span>{{c.title}}</span>
                </a>
              </div>
           </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list border-1px">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <ShopList></ShopList>
        </div>
    </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import ShopList from '../../components/ShopList/ShopList.vue'

	export default {
  	data(){
  		return{
        imgBaseUrl: 'https://fuss10.elemecdn.com'
      }
    },
    mounted(){
      this.$store.dispatch('getFoodType',() => {
        this.$nextTick(()=>{
          new Swiper('.swiper-container',{
            pagination:{
              el:'.swiper-pagination',
            },
            loop:true
          })
        })
      })

      this.$store.dispatch('getShops')
/*  		setTimeout(()=>{
        new Swiper('.swiper-container',{
          pagination:{
            el:'.swiper-pagination',
          },
          loop:true
        })

      },1000)*/
    },
/*    watch:{
      foodType(){
      	this.$nextTick(()=>{
          new Swiper('.swiper-container',{
            pagination:{
              el:'.swiper-pagination',
            },
            loop:true
          })
        })
      }
    },*/
    components:{
      HeaderTop,
      ShopList
    },
    methods:{
      ...mapActions(['getAddress','getFoodType','getShops']),

    },
    computed:{
      ...mapState(['address','foodType']),

/*      foodTypeArr(){
      	const arr = []
        let itemArr = []
        const {foodType} = this
        arr.push(itemArr)
        foodType.forEach(type => {
        	if(itemArr.length<8){
            itemArr.push(type)
          }else {
            //itemArr = []
            itemArr.push(type)
          }
        })
      	return arr
      },*/


      foodTypeArr(){
      	const arr = []
        const {foodType} = this
        let itemArr = []
        foodType.forEach(type => {
        	if(itemArr.length===0){
        		arr.push(itemArr)
          }
          if(itemArr.length<8){
            itemArr.push(type)
          }else {
            itemArr = []
            arr.push(itemArr)
            itemArr.push(type)
          }
       })
        return arr
      }
    },

  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .msite  //首页
    width 100%

    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

</style>
