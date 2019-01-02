<template>
<div class="col table-wrapper" >
  some
  <hr>
<table class="table">
  <thead>
    <tr>
      <th v-for="(f,f_key) in fieldsToDisplay" :key="f_key">{{f}}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <table-cell
      v-for="(f,f_key) in fieldsToDisplay"
      :key="f_key"
      :field_name="f"
      >
      
      {{f}}
      </table-cell>

    </tr>

  </tbody>
</table>

</div>
</template>
<script>
import tableCell from './cell.vue'

export default {
    components:{tableCell,},
    props:['items'],
    data(){
      return{
        fieldsToDisplay:['email','body','name'],
      }
    }
    
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
.table-wrapper{
  flex: 1;
}
</style>
