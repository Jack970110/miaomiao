import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.use(MintUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
