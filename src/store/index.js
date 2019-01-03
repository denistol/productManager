import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
state:{
  loading: false,
  count: 0,
  items:[],
},

mutations: {
    putData(state,payload){
        if(payload){
            state.items = payload;
            state.loading = false;
        }

    },
    startLoading(state){
        state.loading = true
    },
    stopLoading(state){
        state.loading = false
    }
},

actions: {
    fetchAllData( {commit} ){
        commit('startLoading');
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res=>{
            commit('putData',res.data)
            commit('stopLoading')
        })
    },
},

getters: {

},

});