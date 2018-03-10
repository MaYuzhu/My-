<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  name: 'App',
  components:{
    FooterGuide
  },
  mounted(){
    this.$store.dispatch('getAddress')
    this.$store.dispatch('getUserInfo')
  },

}
</script>

<style>
#app
  {height: 100%}
</style>
