// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fontSize from './assets/js/font-size'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios'
axios.defaults.baseURL  = false ? 'minglei' : 'https://step-center.7line.cn'
Vue.prototype.$axios = axios

import store from './store/index'
Vue.prototype.$store = store

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
