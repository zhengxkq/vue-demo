import Vue from 'vue'
import vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(vuex)

const state = {
    userInfo:null,//用户信息

}
export default new vuex.Store({
    state,
    getters,
    actions,
    mutations,
})