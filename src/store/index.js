import Vue from 'vue'
import vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(vuex)

const state = {
    latitude:'',// 当前位置纬度
    longitude:'',// 当前位置经度
    userInfo:null,//用户信息
    geohash:'wtw3sm0q087',//地址geohash值
}
export default new vuex.Store({
    state,
    getters,
    actions,
    mutations,
})