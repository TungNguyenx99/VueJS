import Vue from 'vue'
import Vuex from 'vuex'
import peopleModule from './modules/People/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    people: peopleModule
  }
})
