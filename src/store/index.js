import Vue from 'vue'
import Vuex from 'vuex'
import { fieldsGetters } from './getters'


Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
      fields: [],
    },
    // GETTERS
    getters: Object.assign({}, fieldsGetters)
  })