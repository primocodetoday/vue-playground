import Vue from "vue";
import Vuex from "vuex";
import moduleTD from "./modules/todos";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    moduleTD
  }
});
