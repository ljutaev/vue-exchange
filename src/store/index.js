import Vue from 'vue'
import Vuex from 'vuex'

import exchange from './modules/exchange'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        exchange
    },
    actions: {
        test(context) {
            alert('hello vuex')
            console.log(context)
        },
    },
})