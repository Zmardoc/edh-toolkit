import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import {
  MdDialog,
  MdTable,
  MdButton,
  MdField,
  MdAutocomplete,
  MdMenu,
  MdList,
  MdRipple,
  MdContent,
  MdProgress
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

const thisAxios = axios.create({
  baseURL: "https://api.scryfall.com"
});

Vue.use(VueAxios, thisAxios);
Vue.use(MdDialog);
Vue.use(MdTable);
Vue.use(MdButton);
Vue.use(MdField);
Vue.use(MdMenu);
Vue.use(MdList);
Vue.use(MdAutocomplete);
Vue.use(MdRipple);
Vue.use(MdContent);
Vue.use(MdProgress);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
