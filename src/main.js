import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './assets/fonts/br-firma.css';
import './filters'

Vue.config.productionTip = false

import OtpInput from 'otp-input-vue2';

Vue.use(OtpInput)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
