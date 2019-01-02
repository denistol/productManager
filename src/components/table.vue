<template>
<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <table-cell/>
      <table-cell/>
      <table-cell/>
    </tr>

  </tbody>
</table>

</template>
<script>
import tableCell from './cell.vue'

export default {
    components:{tableCell,},
    
}
</script>

<style>
td{
  position: relative;
}
td>input{
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: #fff;
}
.input-items{
  flex-direction: column;
  position: absolute;
  overflow-y: auto;
  max-height: 100px;
  width: 100%;
  top: 100%;
}
</style>
