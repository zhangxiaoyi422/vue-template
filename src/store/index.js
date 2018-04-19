import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import NewsModules from './../store/modules/NewsModule.js'
import UserModule from './../store/modules/UserModule'

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,//对模块进行命名空间设置
    modules: {
        NewsModules: NewsModules,
        UserModule: UserModule
    }
})