//importing each icons manually to reduce build size
import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);

import {
  faHome,
  faTools,
  faUserAlt,
  faRocket,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faTerminal,
  faIndustry,
  faUniversity,
  faGraduationCap,
  faBars,
  faDatabase,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faTwitter,
  faQuora,
  faInstagram,
  faLinkedinIn,
  faHtml5,
  faSass,
  faJsSquare,
  faPhp,
  faVuejs,
  faLaravel,
  faNodeJs,
  faGitAlt,
  faPython,
  faAdobe,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faBars,
  faHome,
  faTools,
  faEnvelope,
  faMapMarkerAlt,
  faUserAlt,
  faTerminal,
  faIndustry,
  faUniversity,
  faGraduationCap,
  faRocket,
  faPhone,
  faFacebookF,
  faGithub,
  faTwitter,
  faQuora,
  faInstagram,
  faLinkedinIn,
  faHtml5,
  faSass,
  faJsSquare,
  faPhp,
  faVuejs,
  faLaravel,
  faNodeJs,
  faGitAlt,
  faPython,
  faAdobe,
  faDatabase,
  faMobileAlt
);
