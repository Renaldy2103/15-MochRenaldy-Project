import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import PortalVue from 'portal-vue'

Vue.config.productionTip = false

Vue.use(PortalVue)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
