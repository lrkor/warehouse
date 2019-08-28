const index=()=>import('@/views/page/index.vue');
const shopping=()=>import('@/views/page/shopping.vue');

const pages =
    {
        path: '/index',
        component: index,
        name: 'index',
        redirect:'/index/shopping',
        children: [
            {path: '/index/shopping', name: 'shopping', component: shopping},
        ]
    };


export default pages;
