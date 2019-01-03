<template>
      <td>
          <input type="text"
          v-bind:class="{'selected':isChosen}"
          v-model="inputModel"
          @keypress.enter="selectItem(options[0][field_name])"
          @focus="showItems"
          @blur="hideItems"
          >        

          <div v-if="displayItems && !isChosen" class="input-items">
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
            return this.$store.state.items ?
            this.$store.state.items.filter( el=>el[this.field_name].toLowerCase().includes(this.inputModel.toLowerCase()) ):
            [];
        },
        isChosen(){
            return this.options.filter(el=>el[this.field_name] == this.inputModel ).length;
        }
    },
    methods:{
        showItems(){this.displayItems = true},
        hideItems(){
            setTimeout(()=>{
                this.displayItems = false
            },100)
        },
        selectItem(val){
            this.inputModel = val;
            this.selectedItem = val;
            // this.hideItems();
        }
    }
   
};
</script>
<style lang="scss">


.input-items{
    z-index: 60;
    flex-direction: column;
    position: absolute;
    overflow-y: auto;
    max-height: 300px;
    width: 100%;
    top: 100%;
    border: 1px solid silver;
    box-sizing: content-box;
    background-color: rgb(250, 250, 250);
    &>span{
        padding:10px;
        cursor: pointer;
        &:hover{
            background-color: rgba(0, 0, 0, 0.123);
        }
        font-size: .7rem;
    }
}
input.selected{
    background: rgb(233, 255, 241);
}
input{
}

</style>
