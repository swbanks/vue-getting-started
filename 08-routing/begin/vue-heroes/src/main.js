import Vue from 'vue';
import App from '@/app';
import router from './router';

console.log(Vue.version);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
