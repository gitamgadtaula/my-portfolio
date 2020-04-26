import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueParticles from "vue-particles";
import Typewriter from "vue-typewriter";
import "animate.css";

Vue.use(Typewriter);

Vue.use(VueParticles);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
