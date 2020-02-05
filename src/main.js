import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import FireBase from "firebase";
import VueDragscroll from "vue-dragscroll";
import PerfectScrollbar from "vue2-perfect-scrollbar";

import "./plugins/vuetify";
import "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";

Vue.use(PerfectScrollbar);
Vue.use(FireBase);
Vue.use(BootstrapVue);
Vue.use(VueDragscroll);

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
