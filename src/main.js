import Vue from "vue";
import App from "./App.vue";
import VueParticles from "vue-particles";
import Typewriter from "vue-typewriter";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";

// import "animate.css";
import "./assets/style.css";
import { Row, Col, Divider } from "element-ui";
// import ElementUI from "element-ui";
import Carousel3d from "vue-carousel-3d";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas, fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Carousel3d);
// Vue.use(ElementUI);
Vue.use(Row)
Vue.use(Col)
Vue.use(Divider)
Vue.use(Typewriter);
Vue.use(VueParticles);

// Vue.use(Row, Col, Divider);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
