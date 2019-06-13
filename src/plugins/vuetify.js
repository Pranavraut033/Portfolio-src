import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import '@fortawesome/fontawesome-free/css/all.css'


Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#3380E7',
    secondary: '#335EE7',
    accent: '#E0B232',
    error: '#F84736',
    info: '#2196F3',
    success: '#449D48',
    warning: '#FFD351'
  }
})