<template>
  <div id="app">
    <div class="sidebar">sidebar here</div>
    <data-table/>
  </div>
</template>

<script>


import axios from 'axios'
import dataTable from './components/table.vue';

export default {
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
      axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res=>this.items = res.data);
  }
  
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  div{
    display: flex;
    // flex-direction: column;
  }
  table{
    width: 100%;
    border-collapse: collapse;
  }
  td,th{
    border: 1px solid #ddd;
  }
</style>