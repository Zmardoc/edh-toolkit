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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "detail" */ "./views/Detail.vue")
    }
  ]
});
