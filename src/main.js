import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/basecss/base.css'
import './assets/moudel/moudel.css'
import { Button, Input, Message } from 'element-ui'
import dateFormat from './util/dateFormat/dateFormat'
import './filter/dateFormat/dateFilter'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Input)
Vue.use(dateFormat)

Vue.prototype.$message = Message

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
