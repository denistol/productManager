<template>
  <div id="app" class="row">
    <div class="sidebar col">
      <router-link to="/">home</router-link>
      <router-link to="datatable">datatable</router-link>
      <a href="#">some lorem item</a>
    </div>
    <div class="main-wrapper">

      <router-view/>
    
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import dataTable from './components/table.vue';
import home from './components/home.vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  { path: '/datatable', component: dataTable },
  { path: '/', component: home }
];

const router = new VueRouter({
  routes // сокращённая запись для `routes: routes`
})

export default {
  router,
  name: 'app',
  components:{dataTable},
  data(){
    return {
      items:[],
      len:100,
    }
  },
  methods:{
  },
  mounted(){
    // this.$store.commit('fetchData',[1,2,3])
      axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res=>this.$store.commit('fetchData',res.data))
  }
  
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

  *{
    font-family: 'Roboto', sans-serif;

    color:rgb(34, 34, 34);
  }
  div{
    display: flex;
    // flex-direction: column;
  }
  body{
    margin: 0;
    padding: 0;
  }
  table{
    border-collapse: collapse;
  }
  td,th{
    border: 1px solid #e2e3e5;
  }
  .col{
    flex-direction: column;
  }
  .row{
    flex-direction: row;
  }
  a{text-decoration: none;}
  .sidebar{
    background-color: #222d32;
    color: white;
    &>a{
      font-size: 14px;
      font-weight: 400;
      padding: 11px 30px;
      display: inline;  
      color: rgb(216, 216, 216);
      &:hover{
        background-color: rgba(0, 0, 0, 0.171);
        color: white;
      }
    }
  }
  #app{
    min-height: 100vh;
  }
  .main-wrapper{
    padding: 30px;
    flex: 1;
  }
</style>