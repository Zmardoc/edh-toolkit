import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    decks: []
  },
  mutations: {
    addDeck(state, deck) {
      state.decks.push(deck);
    },
    removeDeck(state, id) {
      state.decks = state.decks.filter(function(obj) {
        return obj.id !== id;
      });
    }
  },
  actions: {},
  plugins: [createPersistedState()]
});
