<template>
  <div id="app" class="row">
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
    // this.$store.commit('fetchData',[1,2,3])
      axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res=>this.$store.commit('fetchData',res.data))
  }
  
}
</script>

<style lang="scss">

  *{
    font-family: sans-serif;
  }
  div{
    display: flex;
    // flex-direction: column;
  }
  table{
    border-collapse: collapse;
  }
  td,th{
    border: 1px solid #ddd;
  }
  .col{
    flex-direction: column;
  }
  .row{
    flex-direction: row;
  }
</style>