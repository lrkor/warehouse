import Vue from 'vue'
import Router from 'vue-router'

const login=()=>import('@/views/login.vue');
const register=()=>import('@/views/register.vue');
import pages from './pages'

Vue.use(Router);
let routesList = [
    {path: '/', name: 'login', component: login},
    {path: '/register', name: 'register', component: register},
];
routesList.push(pages);
export default new Router({
    mode: 'history',
    base:'/mobile/',
    routes: routesList,
})