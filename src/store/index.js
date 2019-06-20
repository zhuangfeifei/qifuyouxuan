import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    indexUrlActive: 0,
}
const mutations = {
    indexUrlActive(state, res){
        state.indexUrlActive = res
    },
}
const actions ={
  
}


export default new Vuex.Store({
    state,
    mutations,
    actions,
})