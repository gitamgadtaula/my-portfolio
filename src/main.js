import Vue from "vue";
import App from "./App.vue";
import VueParticles from "vue-particles";
import Typewriter from "vue-typewriter";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";

//check if the element is in viewport
import checkView from 'vue-check-view'

// import "animate.css";
import "./assets/style.css";
import { Row, Col, Divider } from "element-ui";
import './fontawesome.js'
// import ElementUI from "element-ui";
import Carousel3d from "vue-carousel-3d";

Vue.use(checkView)
Vue.use(Carousel3d);
// Vue.use(ElementUI);
Vue.use(Row);
Vue.use(Col);
Vue.use(Divider);
Vue.use(Typewriter);
Vue.use(VueParticles);

// Vue.use(Row, Col, Divider);

Vue.config.productionTip = true;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
