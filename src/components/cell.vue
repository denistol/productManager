<template>
      <td >
          <input type="text" @focus="displayitems = true">
          <div v-if="displayItems" class="input-items">
              <span>some item</span>
              <span>some item</span>
              <span>some item</span>
              <span>some item</span>
              <span>some item</span>
              <span>some item</span>
              <span>some item</span>
              <span>some item</span>
              <span>some item</span>
              <span>some item</span>
              <span>some item</span>
              <span>some item</span>
          </div>
       </td>
</template>
<script>
export default {
    data(){
        return {
            displayItems:false,
        }
    },
   
};
</script>
