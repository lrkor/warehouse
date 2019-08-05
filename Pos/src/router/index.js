import Vue from 'vue'
import Router from 'vue-router'

//404
import NotFoundComponent from '@/components/notFound'

import login from '@/components/login'
import Pos from '@/components/page/Pos'
import store from '@/components/page/store'
import set from '@/components/page/set'
import vip from '@/components/page/vip'
import cashier from '@/components/page/cashier'
import statistical from '@/components/page/statistical'
import sysLogin from '@/components/sys/login'
import sys from '@/components/sys/sys'

//后台子路由
import goodsList from '@/components/sys/goods/list'
import goodsAdd from '@/components/sys/goods/add'
import goodsUpdate from '@/components/sys/goods/update'
import userList from '@/components/sys/user/list'
import userAdd from '@/components/sys/user/add'
import userUpdate from '@/components/sys/user/update'
import orderList from '@/components/sys/order/list'
import orderAnalyze from '@/components/sys/order/analyze'


Vue.use(Router);

export default new Router({
  // mode: 'history',  //去掉url中的#
  // base:'/dist',
  routes: [
    // {path: '*', component: NotFoundComponent},
    {path: '/', name: 'login', component: login},
    {path: '/Pos', name: 'Pos', component: Pos},
    {path: '/store', name: 'store', component: store,},
    {path: '/set', name: 'set', component: set},
    {path: '/vip', name: 'vip', component: vip},
    {path: '/cashier', name: 'cashier', component: cashier},
    {path: '/statistical', name: 'statistical', component: statistical},
    {path: '/sysLogin', name: 'sysLogin', component: sysLogin},
    {
      path: '/sys', name: 'sys', component: sys,
      children:[
        {path: 'goods/list', name: 'goodsList', component: goodsList},
        {path: 'goods/add', name: 'goodsAdd', component: goodsAdd},
        {path: 'goods/update/:id', name: 'goodsUpdate', component: goodsUpdate},
        {path: 'user/list', name: 'userList', component: userList},
        {path: 'user/add', name: 'userAdd', component: userAdd},
        {path: 'user/update/:id', name: 'userUpdate', component: userUpdate},
        {path: 'order/list', name: 'orderList', component: orderList},
        {path: 'order/analyze', name: 'orderAnalyze', component: orderAnalyze},
      ]
    }
  ]
})
