// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//懒加载
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false;
Vue.use(ElementUI);
// 懒加载
Vue.use(VueLazyLoad,{
  error:'assets/img/loadErr.jpg',//加载错误时的显示图片
  loading:'assets/img/loading.jpg'//加载过程中的过渡图片
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
