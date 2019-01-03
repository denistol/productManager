<template>
  <div id="app" class="row">
    <div class="sidebar col">
      <router-link v-bind:class="{ 'active': pageName == '/'}" to="/">Главная</router-link>
      <router-link v-bind:class="{ 'active': pageName == '/datatable'}" to="datatable">База товаров</router-link>
      <router-link v-bind:class="{ 'active': pageName == '/options'}" to="options">Параметры</router-link>
      <router-link v-bind:class="{ 'active': pageName == '/clients'}" to="clients">Клиенты</router-link>
      <router-link v-bind:class="{ 'active': pageName == '/sales'}" to="sales">Продажи</router-link>
      <router-link v-bind:class="{ 'active': pageName == '/statistics'}" to="statistics">Статистика</router-link>
      <a href="#">some lorem item</a>
    </div>
    <div class="main-wrapper"><router-view/></div>

  </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import dataTable from './components/table.vue';
import home from './components/home.vue';
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
  .router-link-exact-active{
    
    background-color: rgba(0, 0, 0, 0.171);
    color: white;
    border-right: 5px solid rgb(0, 255, 179) !important;
      
  }
  .sidebar{
    background-color: #222d32;
    color: white;
    &>a{
      font-size: 14px;
      font-weight: 400;
      padding: 11px 30px;
      display: inline;  
      color: rgb(216, 216, 216);
      border-right: 5px solid transparent;
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