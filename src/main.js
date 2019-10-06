import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import Progresser from "./components/minies/progresser";
import Card from "./components/minies/card";
import Loading from "./components/minies/loading";
import Mana from "./components/minies/mana";
import {
  MdDialog,
  MdCard,
  MdTable,
  MdButton,
  MdField,
  MdAutocomplete,
  MdMenu,
  MdList,
  MdRipple,
  MdContent,
  MdProgress,
  MdApp,
  MdDrawer,
  MdIcon,
  MdBottomBar,
  MdToolbar
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
//import "vue-material/dist/theme/default.css";

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
Vue.use(MdApp);
Vue.use(MdDrawer);
Vue.use(MdIcon);
Vue.use(MdBottomBar);
Vue.use(MdToolbar);
Vue.use(MdCard);
Vue.config.productionTip = false;
Vue.component("progresser", Progresser);
Vue.component("card", Card);
Vue.component("loading", Loading);
Vue.component("mana", Mana);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
