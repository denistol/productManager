<template>
      <td v-bind:class="{'selected':selected && (selectedItem == inputModel)}">
          <input type="text"
          v-model="inputModel"
          @focus="showItems"
          @blur="hideItems"
          @keypress.enter="selectItem(options[0][field_name]);displayItems=false"
          >

          <div v-if="displayItems && options.length && options[0][field_name] != inputModel" class="input-items">
              <span
              v-for="(option,option_key) in options"
              :key="option_key"
              @click="selectItem(option[field_name])">
              {{option[field_name]}}
              </span>

          </div>

       </td>
</template>
<script>
export default {
    props:['field_name'],
    data(){
        return {
            inputModel:'',
            displayItems:false,
            selected:false,
            selectedItem:false,
        }
    },
    computed:{
        options(){
            if(this.$store.state.items && this.displayItems){
                let storeItems = this.$store.state.items
                return storeItems.filter( el=>el[this.field_name].toLowerCase().includes(this.inputModel.toLowerCase()) )
            }else{
                return []
            }
            
        }
    },
    methods:{
        showItems(){this.displayItems = true},
        hideItems(){
            setTimeout(()=>{
                this.displayItems = false
            },160)
        },
        selectItem(val){
            this.inputModel = val;
            this.selected = true;
            this.selectedItem = val;
            // this.hideItems();
        }
        
    }
   
};
</script>
<style lang="scss">
input,.input-items>span,th{
    padding: 10px 0;
}
.input-items{
    box-sizing: border-box;
    background-color: rgb(250, 250, 250);
    &>span{
        &:hover{
            background-color: rgba(0, 0, 0, 0.123);
        }
        font-size: .7rem;
    }
}
td.selected{
    background: rgb(49, 211, 111);
    z-index: 10;
}
</style>
