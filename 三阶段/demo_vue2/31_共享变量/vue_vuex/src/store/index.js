import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    add(context, n) {
        console.log("actions add", n)
        context.commit('add', n)
    },
    sub(context, n) {
        console.log("actions sub", n)
        context.commit('sub', n)
    }
}

const mutations = {
    add(state, n) {
        console.log("mutations add", n)
        state.num += n
    },
    sub(state, n) {
        console.log("mutations sub", n)
        state.num -= n
    }
}

const state = {
    num: 0
  }

const store = new Vuex.Store({
    state,
    actions,
    mutations
})


export default store    