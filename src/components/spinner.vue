<template>
    <div class="spinner">
        loading...
        <img src="/spinner.gif" alt="">
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .spinner{
        position: absolute;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: auto;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.808);
        &>img{
            margin: auto;

        }
    }


</style>
