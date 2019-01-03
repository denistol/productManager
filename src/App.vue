<template>
  <div id="app" class="row">
    <sidebar/>
    <div class="main-wrapper col"><router-view/></div>
  </div>
</template>

<script>

import Vue from 'vue'
import dataTable from './components/table.vue';
import home from './components/home.vue';
import sidebar from './components/sidebar.vue';
import optionsComponent from './components/options.vue';
import clients from './components/clients.vue';
import sales from './components/sales.vue';
import statistics from './components/statistics.vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  { path: '/datatable', component: dataTable },
  { path: '/options', component: optionsComponent },
  { path: '/clients', component: clients },
  { path: '/sales', component: sales },
  { path: '/statistics', component: statistics },
  { path: '/', component: home }
];
const router = new VueRouter({ routes })

export default {
  router,
  name: 'app',
  components:{sidebar},
  computed:{
    pageName(){return this.$route.path}
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
  i{
    color: inherit;
  }
  body{
    background-color: rgb(234, 241, 243);
    margin: 0;
    padding: 0;
    font-size: 14px;
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
  .router-link-exact-active{
    
    background-color: rgba(0, 0, 0, 0.171);
    color: white;
    border-right: 5px solid rgb(0, 255, 179) !important;
      
  }

  #app{
    min-height: 100vh;
  }
  .main-wrapper{
    background-color: #fff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    margin: 20px;
    padding: 20px;
    flex: 1;
    border-top: 3px solid rgb(0, 255, 179)
  }
  .text-danger{
    color: rgb(207, 81, 91);;
  }
</style>