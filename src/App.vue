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
import './sass/base.scss'

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
  }
</script>