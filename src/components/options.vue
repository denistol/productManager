<template>
    <div class="options-wrapper col">
        <!-- <div class="option-block col"> add new </div> -->
        <div class="row">
            <div v-for="(o,o_k) in options" :key="o_k" class="option-tabs row">
                <span class="tab">
                {{o}}
                </span>
            </div>
            <div class="option-tabs row"><span class="tab"> + </span> </div>
        </div>

        <div class="option-container row">
            container here
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            options:['category','season','size','itemns new','season','size','itemns new'],
        }
    }
}
</script>
<style lang="scss">

    .options-wrapper{
        flex-wrap: wrap;
        flex: 1;
    }
    .tab{
        padding: 6px 16px;
        border-radius: 3px ;
        border: 1px solid #e2e3e5;
        margin: 8px 8px 8px 0;
        
    }
    .option-container{
        padding: 20px;
        border: 1px solid #e2e3e5;
        flex: 1;
    }
    
</style>