import Vue from 'vue'
import Vuex from 'vuex'
import auth from './moudle/auth'
import blog from './moudle/blog'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        auth,
        blog
    }
})