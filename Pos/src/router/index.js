import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import Pos from '@/components/page/Pos'
import store from '@/components/page/store'
import set from '@/components/page/set'
import vip from '@/components/page/vip'
import cashier from '@/components/page/cashier'
import statistical from '@/components/page/statistical'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/Pos',
      name: 'Pos',
      component: Pos
    },
    {
      path: '/store',
      name: 'store',
      component: store,
    },
    {
      path: '/set',
      name: 'set',
      component: set
    },
    {
      path: '/vip',
      name: 'vip',
      component: vip
    },
    {
      path: '/cashier',
      name: 'cashier',
      component: cashier
    },
    {
      path: '/statistical',
      name: 'statistical',
      component: statistical
    },
  ]
})
