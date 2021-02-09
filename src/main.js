import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/basecss/base.css'
import { Button, Input, Message } from 'element-ui'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Input)
Vue.prototype.$message = Message

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
