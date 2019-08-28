const index=()=>import('@/views/page/index.vue');
const shopping=()=>import('@/views/page/shopping.vue');
const order=()=>import('@/views/page/order.vue');
const personal=()=>import('@/views/page/personal.vue');

const pages =
    {
        path: '/index',
        component: index,
        name: 'index',
        redirect:'/index/shopping',
        children: [
            {path: '/index/shopping', name: 'shopping', component: shopping},
            {path: '/index/order', name: 'order', component: order},
            {path: '/index/personal', name: 'personal', component: personal},
        ]
    };


export default pages;
