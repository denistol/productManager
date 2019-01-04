<template>
    <div class="sidebar col">
      <div class="sidebar-links col">
        <a style="text-align:center;" href="#" @click.prevent="collapse = !collapse"><i class="fas fa-bars"></i></a>
        <router-link to="/"><i class="fas fa-star"></i> {{collapse ? '': 'Главная'}}</router-link>
        <router-link to="datatable"><i class="fas fa-cubes"></i> {{collapse ? '': 'База товаров'}} </router-link>
        <router-link to="options"><i class="fas fa-broom"></i> {{collapse ? '': 'Параметры'}}</router-link>
        <router-link to="clients"><i class="fas fa-user-tie"></i> {{collapse ? '': 'Клиенты'}}</router-link>
        <router-link to="sales"><i class="fas fa-dollar-sign"></i> {{collapse ? '': 'Продажи'}}</router-link>
        <router-link to="statistics"><i class="fas fa-chart-pie"></i> {{collapse ? '': 'Статистика'}}</router-link>
        <router-link to="simpletable"><i class="fas fa-table"></i> {{collapse ? '': 'Таблица'}}</router-link>
        <router-link to="config"><i class="fas fa-clipboard-list"></i> {{collapse ? '': 'Конфигурация'}}</router-link>
      </div>
    </div>
</template>
<script>
export default {
    data(){
      return{ collapse:false }
    },
    mounted(){
        window.onscroll = function(e){
          document.querySelector('.sidebar-links').style.marginTop = window.pageYOffset + 'px';
        }
    }
    
}
</script>