<template>
      <td>
          <input type="text"
          v-bind:class="{'selected':isChosen}"
          v-model="inputModel"
          @keypress.enter="selectItem(options[0][field_name])"
          @focus="showItems"
          @blur="hideItems"
          >        
        <div v-if="displayItems" class="add-value"></div>
          <div v-if="displayItems && !isChosen && options.length" class="input-items">
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
            this.$store.state.items.filter( el=>el[this.field_name].toString().toLowerCase().includes(this.inputModel.toString().toLowerCase()) ):
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
            },450)
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
.add-value{
    display: flex;
    height: 100%;
    padding: 0 10px;
    opacity: .7;
    position: absolute;
    right: 0;
    align-items: center;
    justify-content: center;

}
td>input{
    float: left;
    margin: 0;
    padding: 7px;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
.input-items{
    margin-top: 1px;
    z-index: 60;
    flex-direction: column;
    position: absolute;
    overflow-y: auto;
    max-height: 300px;
    width: 100%;
    top: 100%;
    margin-left: -1px;
    border-bottom: 1px solid #e2e3e5;
    border-left: 1px solid #e2e3e5;
    border-right: 1px solid #e2e3e5;
    left: 0;
    background-color: rgb(250, 250, 250);
    &>span{
        padding: 7px;
        cursor: pointer;
        &:hover{
            background-color: rgba(27, 26, 37, 0.137);
        }
    }
}
input.selected{
    border: 2px solid rgba(113, 177, 60,.40);
    border-radius: 3px;
    &:before{
        content:"OK";
        display: block;
        width: 50px;
        height: 50px;
        z-index: inherit;
    }
}


</style>
