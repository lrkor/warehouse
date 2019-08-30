import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    userInfo: {}
};

const mutations = {
    assignment(state, data) {
        state.userInfo = data;
    }
};


export default new Vuex.Store({
    state,
    mutations
})
