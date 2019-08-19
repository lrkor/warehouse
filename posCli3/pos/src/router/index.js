import Vue from 'vue'
import Router from 'vue-router'
import pages from './pages'
import sysList from './sysList'
import login from '@/views/pages/login.vue'
import sysLogin from '@/views/sys/login.vue'



Vue.use(Router);
let routesList = [
    {path: '/', name: 'login', component: login},
    {path: '/sys/login', name: 'sysLogin', component: sysLogin},
];

routesList.push(pages,sysList);
export default new Router({
    mode: 'history',
    base:'/pos/',
    routes: routesList,
})