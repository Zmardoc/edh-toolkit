import Vue from "vue";
import Router from "vue-router";
import Decks from "./views/Decks.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "decks",
      component: Decks
    },
    {
      path: "/decks/:id",
      name: "detail",
      component: () =>
        import(/* webpackChunkName: "detail" */ "./views/Detail.vue")
    }
  ]
});
