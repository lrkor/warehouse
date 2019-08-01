import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    token: '',
};

const mutations = {
    saveToken(state,data){
      state.token = data;
    }
};

export default new Vuex.Store({
  state,
  mutations
})
