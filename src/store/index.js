import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { name: "EKIDEN ONE", price: 49.99 },
      { name: "RUN SUPPORT", price: 119.99 },
      { name: "KIPRUN LONG 2", price: 249.99 },
      { name: "KIPRUN KD PLUS", price: 279.99 }
    ]
  },
  getters: {
    saleProducts(state) {
      return state.products.map(product => {
        return {
          name: `**${product.name}**`,
          price: product.price / 2
        };
      });
    }
  },
  // now async below
  mutations: {
    reducePrice(state, payload) {
      state.products.forEach(product => {
        product.price -= payload;
      });
    }
  },
  // async only in actions
  actions: {
    reducePrice(context, payload) {
      setTimeout(() => {
        context.commit("reducePrice", payload);
      }, 2000);
    }
  },
  modules: {}
});