import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from './filters'

import './mock/mockServe'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
  filters
}).$mount('#app');
