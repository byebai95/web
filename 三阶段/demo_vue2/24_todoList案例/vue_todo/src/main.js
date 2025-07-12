import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    // 创建一个事件总线对象
    Vue.prototype.$bus = this
  }
}).$mount('#app')
