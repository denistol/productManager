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
    <tr v-for="i in 5" :key="i">
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


.table-wrapper{
  flex: 1;
}

</style>
