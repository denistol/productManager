<template>
<div class="col table-wrapper" >
  <div class="row">
    <span v-bind:class="{'field':fieldsToDisplay.indexOf(f) == -1}" v-for="(f,f_key) in allFields" :key="f_key" @click="toggleField(f)"><b>{{f}}</b> | </span>
  </div>
  <hr>
<table class="table">
  <thead>
    <tr>
      <th v-for="(f,f_key) in allFields" v-show="fieldsToDisplay.indexOf(f) != -1" :key="f_key">{{f}}</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="i in 1000" :key="i">
      <table-cell v-for="(f,f_key) in allFields"
      v-show="fieldsToDisplay.indexOf(f) != -1"
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
      return {
        allFields:['email','body','name'],
        fieldsToDisplay:['email','body','name'],
      }
    },
    methods:{
      toggleField(f){
        let found = this.fieldsToDisplay.indexOf(f);
        found == -1 ?
        this.fieldsToDisplay.push(f):
        this.fieldsToDisplay.splice(found,1);
      }
    },
    
}
</script>

<style lang="scss">
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
  z-index: 60;
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
.field{
  &::before{
    content:"[+] "
  }
}
</style>
