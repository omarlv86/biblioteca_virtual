import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import vuetify from './plugins/vuetify'
import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
