const sys = () => import ('@/views/sys/sys.vue');
const goodsList = () => import ('@/views/sys/goods/list.vue');
const goodsAdd = () => import ('@/views/sys/goods/add.vue');
const goodsUpdate = () => import ('@/views/sys/goods/update.vue');
const userList = () => import ('@/views/sys/user/list.vue');
const userAdd = () => import ('@/views/sys/user/add.vue');
const userUpdate = () => import ('@/views/sys/user/update.vue');
const orderList = () => import ('@/views/sys/order/list.vue');
const orderAnalyze = () => import ('@/views/sys/order/analyze.vue');


const sysList =
    {
        path: '/sys',
        component: sys,
        name: 'sys',
        children: [
            {path: '/sys/goods/list', name: 'goodsList', component: goodsList},
            {path: '/sys/goods/add', name: 'goodsAdd', component: goodsAdd},
            {path: '/sys/goods/update/:id', name: 'goodsUpdate', component: goodsUpdate},
            {path: '/sys/user/list', name: 'userList', component: userList},
            {path: '/sys/user/add', name: 'userAdd', component: userAdd},
            {path: '/sys/user/update/:id', name: 'userUpdate', component: userUpdate},
            {path: '/sys/order/list', name: 'orderList', component: orderList},
            {path: '/sys/order/analyze', name: 'orderAnalyze', component: orderAnalyze},
        ]
    };


export default sysList;