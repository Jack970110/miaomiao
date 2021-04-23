import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Scroller from '@/components/Scroller'
import Loading from '@/components/Loading'
Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.component('Scroller' , Scroller)
Vue.component('Loading' ,Loading)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
