import Vue from "vue";
import App from "./App.vue";
import VueParticles from "vue-particles";
import Typewriter from "vue-typewriter";
import "element-ui/lib/theme-chalk/index.css";
import "animate.css";
import "./assets/style.css";
// import { Row, Col, Divider } from "element-ui";
import ElementUI from "element-ui";
Vue.use(ElementUI);
Vue.use(Typewriter);
Vue.use(VueParticles);

// Vue.use(Row, Col, Divider);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
