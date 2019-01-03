<template>
    <div class="sidebar col">
      <a style="text-align:center;" href="#" @click="collapse = !collapse"><i class="fas fa-bars"></i></a>
      <router-link to="/"><i class="fas fa-star"></i> {{collapse ? '': 'Главная'}}</router-link>
      <router-link to="datatable"><i class="fas fa-cubes"></i> {{collapse ? '': 'База товаров'}} </router-link>
      <router-link to="options"><i class="fas fa-broom"></i> {{collapse ? '': 'Параметры'}}</router-link>
      <router-link to="clients"><i class="fas fa-user-tie"></i> {{collapse ? '': 'Клиенты'}}</router-link>
      <router-link to="sales"><i class="fas fa-dollar-sign"></i> {{collapse ? '': 'Продажи'}}</router-link>
      <router-link to="statistics"><i class="fas fa-chart-pie"></i> {{collapse ? '': 'Статистика'}}</router-link>
    </div>
</template>
<script>
export default {
    data(){
      return{
        collapse:false,
      }
    }
}
</script>
<style lang="scss">
    .sidebar{
    // padding-top: 20px;
    background-color: #222d32;
    color: white;
    &>a{
      
      // font-size: 14px;
      font-weight: 400;
      padding: 11px 30px;
      display: inline;  
      color: rgb(216, 216, 216);
      border-right: 5px solid transparent;
      &:hover{
        background-color: rgba(0, 0, 0, 0.171);
        color: white;
      }
    }
  }
</style>