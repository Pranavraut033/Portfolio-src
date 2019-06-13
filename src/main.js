import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import FireBase from 'firebase'

import './plugins/vuetify'
import './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(FireBase)
Vue.use(BootstrapVue)

Vue.config.productionTip = false
router.afterEach(to => {
    document.title = to.meta.title;
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')