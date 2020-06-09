import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tagsStoreList: [],
  },
  actions: {},
  mutations: {
    saveTagsData(state, data) {
      state.tagsStoreList = data;
      sessionStorage.setItem("Tags", data);
    },
  },
});
