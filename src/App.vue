<template>
  <div id="app">
    <!-- 导航 -->
    <top-item></top-item>
    <router-view/>
    <div id="footer"></div>

    <img id="moveTop" v-if="isTop" @click="top" src="./assets/images/home/move-top.png" alt="" srcset="">
  </div>
</template>

<script>
import Top from './components/top'
export default {
  name: 'App',
  data(){
    return{
      isTop: false, 
    }
  },
  components:{
      'top-item': Top
  },
  mounted(){
      $(document).ready(()=>{
          $(window).scroll(()=>{
              if ($(window).scrollTop()>10){
                  this.isTop = true
              }
              else{
                  this.isTop = false
              }
          });
      })
  },
  methods:{
      top(){
          if ($('html').scrollTop()) {
              $('html').animate({ scrollTop: 0 }, 500);
              return false;
          }
          $('body').animate({ scrollTop: 0 }, 500);
          return false;  
      },
  },
  watch: {
      $route: {
        handler: function(val, oldVal){
            if(val.path === '/') this.$store.commit('indexUrlActive', 0)
            if(val.path === '/ourServices') this.$store.commit('indexUrlActive', 2)
            if(val.path === '/changeCompany') this.$store.commit('indexUrlActive', 3)
            if(val.path === '/transfer') this.$store.commit('indexUrlActive', 4)
        },
        // 深度观察监听
        deep: true
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; font-size: 0.18rem;
}
*{
  margin: 0; padding: 0; box-sizing: border-box;
}
#footer{
    width: 100%; height: 3.78rem;
    background: url('./assets/images/home/footer.png') no-repeat; background-size: 100% 100%;
}

#moveTop{
  width: 0.3rem; height: 0.3rem; position: fixed; bottom: 0.5rem; right: 0.5rem;
}
#moveTop:hover{
    cursor:pointer;
    -webkit-transform:scale(1.2); -ms-transform:scale(1.2); transform:scale(1.2); 
}
</style>
