<template>
<div class="col table-wrapper" >
  <spinner v-if="isLoading"/>
  <div class="row">
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
      <td v-for="(f,f_key) in allFields" v-show="fieldsToDisplay.indexOf(f) != -1" :key="f_key" :field_name="f" >
      {{f}}
      </td>
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
import spinner from './spinner.vue';
export default {
    components:{tableCell,spinner},
    props:['items'],
    data(){
      return {
        allFields:['email','body','name','id','postId'],
        fieldsToDisplay:['email','body','id','postId'],
        loading:true,
      }
    },

    mounted(){
      this.$store.dispatch('fetchAllData');
    },
    methods:{
      toggleField(f){
        let found = this.fieldsToDisplay.indexOf(f);
        found == -1 ?
        this.fieldsToDisplay.push(f):
        this.fieldsToDisplay.splice(found,1);
      }
    },
  computed:{
    isLoading(){return this.$store.state.loading},
  },
}
</script>


