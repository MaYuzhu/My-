<template>
	<div class="goods">
    <div class="menu-wrapper">
      <ul >
        <li class="menu-item" v-for="(item,index) in goods" :key="index"
            :class="{current:index===currentIndex}" @click="selectCurrent(index)">
          <span class="text bottom-border-1px">
            <span class="icon" v-if="item.type>=0" :class="supportsArr[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul ref="foodsWarpperUl">
        <li class="food-list food-list-hook" v-for="(item,index) in goods" :key="index">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li class="food-item bottom-border-1px" v-for="(food,index) in item.foods" :key="index">
              <div class="icon">
                <img width="57" height="57" :src='food.icon'>
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span></div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <CartControl :food="food"/>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <ShopCart />
  </div>
</template>

<script>
  import CartControl from '../../../components/CartControl/CartControl.vue'
  import ShopCart from '../../../components/ShopCart/ShopCart.vue'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
	export default {
  	data(){
  		return{
        supportsArr:['decrease', 'discount', 'guarantee', 'invoice', 'special'],
        scrollY : 0,
        tops:[],
      }
    },
  	mounted(){
  		this.$store.dispatch('getGoods',()=>{
  			this.$nextTick(()=>{
  				this._itemScroll()
          this._initTops()
        })
      })

    },
    computed:{
    	...mapState(['goods']),
      currentIndex(){
    		const {scrollY,tops} = this
        return tops.findIndex((top,index) => scrollY >= top && scrollY < tops[index+1])
      },
    },
    methods:{
  		_itemScroll(){
  			new BScroll('.menu-wrapper',{
          click:true
        })
        this.foodScroll = new BScroll('.foods-wrapper',{
          probeType : 3,
          click:true
        })
        this.foodScroll.on('scroll',(pos)=>{
        	this.scrollY = Math.abs(pos.y)
          //console.log(pos.y)
        })
        this.foodScroll.on('scrollEnd',(pos)=>{
        	this.scrollY = Math.abs(pos.y)
          //console.log('滑动结束'+pos.y)
        })
      },
      _initTops(){
  			const tops = []
        let top = 0
        tops.push(top)
        const lis = this.$refs.foodsWarpperUl.getElementsByClassName('food-list-hook')
        Array.prototype.slice.call(lis).forEach((li,index)=>{
  				top += li.clientHeight
          tops.push(top)
        })
        this.tops = tops
      },
      selectCurrent(index){
      	const top = this.tops[index]
        this.scrollY = top
        this.foodScroll.scrollTo(0,-top,500)
      },

    },
    components:{
      CartControl,
      ShopCart
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"

  .goods
    display: flex
    position: absolute
    top: 180px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: -1px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px

        bottom-border-1px(rgba(7, 17, 27, 0.1))
        /*border-bottom 1px solid rgba(7, 17, 27, 0.1)*/
        &:last-child
          border-none()
          margin-bottom: 0px
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>


