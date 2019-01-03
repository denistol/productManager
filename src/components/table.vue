<template>
<div class="col table-wrapper" >
  <div class="row">
    <span>отображать:  </span>
    <span class="field-select" v-bind:class="{'field':fieldsToDisplay.indexOf(f) != -1}" v-for="(f,f_key) in allFields" :key="f_key" @click="toggleField(f)">{{f}}</span>
  </div>
  <hr>
<table class="table">
  <thead>
    <tr>
      <th v-for="(f,f_key) in allFields" v-show="fieldsToDisplay.indexOf(f) != -1" :key="f_key">{{f}}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
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

<div class="row buttons">
  <button class="btn success">Сохранить</button>
  <button class="btn danger">Удалить</button>
</div>

</div>
</template>
<script>
import tableCell from './cell.vue'

export default {
    components:{tableCell,},
    props:['items'],
    data(){
      return {
        allFields:['email','body','name','id','postId'],
        fieldsToDisplay:['email','body','id','postId'],
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
table{
}
th:first-child{
}
th{
  // text-transform: uppercase;
  padding: 5px;
  text-align: left;
  font-size: 16px;
  background-color: #f1f1f1;
}
td{
  position: relative;
}
.table-wrapper{
  flex: 1;
}
button{
  border-radius: 3px;
  
  margin-right: 5px;
  cursor: pointer;
  color: white;
  border:none;
  outline: none;
  padding: 10px;

}
.btn.success{
  background-color: rgb(138, 207, 81);
  &:hover{
    background-color: rgb(113, 177, 60);
  }
}
.btn.danger{
  background-color: rgb(207, 81, 91);
  &:hover{
    background-color: rgb(172, 55, 64);
  }
}
.row.buttons{
  margin: 10px 20px;
  justify-content: flex-end;
}
.field-select{
  cursor: pointer;
  font-size: 13px;
  padding: 2px 7px;
  border-radius: 4px;
  // border: 1px solid silver;
  background-color: rgb(243, 243, 243);
  margin:0 5px;
}
.field{
  background: rgb(199, 211, 206);
}
</style>
