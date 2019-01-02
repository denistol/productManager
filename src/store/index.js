import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
state:{
  count: 0,
  items:[],
},

mutations: {
    fetchData(state,payload){
        state.items = payload;
    }
},

actions: {

},

getters: {

},

});