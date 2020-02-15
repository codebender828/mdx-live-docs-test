import Vue from 'vue'
import App from './App.vue'
import Vuep from 'vuep'
import VueLive from 'vue-live'
import 'vuep/dist/vuep.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material-palenight.css'

Vue.config.productionTip = false
Vue.use(VueLive)

Vue.component('Wrapper', {
  render (h) {
    return h('div', this.$slots.default)
  }
})

Vue.component('InlineCode', {
  render (h) {
    return h('code', this.$slots.default)
  }
})

Vue.use(Vuep, {
  theme: 'material-palenight',
  tabSize: 2,
  lineNumbers: true,
  fontFamily: 'Menlo,monospace'
})

new Vue({
  render: (h) => h(App)
}).$mount('#app')
