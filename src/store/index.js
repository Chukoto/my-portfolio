import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
  },
  mutations: {
    toggleSideNav(state) {
      state.drawer = !state.drawer;
    },
  },
  actions: {
    toggleSideNav({ commit }) {
      commit('toggleSideNav');
    },
  },
  modules: {},
});
