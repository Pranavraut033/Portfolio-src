import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import FireBase from "firebase";

import "./plugins/vuetify";
import "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(FireBase);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;
router.afterEach(to => {
  document.title = to.meta.title;
});

const gobalVariable = new Vue({
  data: () => ({
    startAnimation: false
  })
});
Vue.mixin({
  computed: {
    startAnimation: {
      get: () => gobalVariable.$data.startAnimation,
      set: v => (gobalVariable.$data.startAnimation = v)
    }
  }
});

new Vue({
  router,
  render: h => h(App),
  mounted() {
    setTimeout(() => (this.startAnimation = true), 4200);
  }
}).$mount("#app");