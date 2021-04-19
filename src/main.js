import Vue from 'vue'
import App from './App.vue'
import router from './router'
// vant
import {
  PullRefresh,
} from 'vant';
Vue.use(PullRefresh);

// $bus
Vue.prototype.$bus = new Vue({})




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
