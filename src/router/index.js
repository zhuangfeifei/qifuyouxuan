import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import OurServices from '@/pages/ourServices'
import Transfer from '@/pages/transfer'
import ChangeCompany from '@/pages/changeCompany'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/ourServices',
      component: OurServices
    },
    {
      path: '/transfer',
      component: Transfer
    },
    {
      path: '/changeCompany',
      component: ChangeCompany
    },
  ]
})
