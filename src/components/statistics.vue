<template>
<div class="col">
    <div class="table-filters">
        <div class="row table-filter">
            <i class="fas fa-calendar-alt"></i> <input type="date" :value="today"><input type="date" :value="today">
                <button class="btn success">применить</button>
        </div>
    </div>
    <div class="charts-wrapper row">
        <pie-chart class="chart-item" />
        <line-chart class="chart-item" />
        <bar-chart :chart-label="'тест текста'" class="chart-item" />
        <line-chart class="chart-item" />
        <bar-chart :chart-label="'тест текста'" class="chart-item" />
        <line-chart class="chart-item" />
        <bar-chart :chart-label="'тест текста'" class="chart-item" />
        <line-chart class="chart-item" />
        <bar-chart :chart-label="'тест текста'" class="chart-item" />
        <line-chart class="chart-item" />
    </div>
</div>
</template>
<script>
import barChart from './charts/barChart.vue'
import lineChart from './charts/lineChart.vue'
import pieChart from './charts/pieChart.vue'
import moment from 'moment'
export default {
    components:{barChart,lineChart,pieChart},
    computed:{
        today(){return moment( new Date().now ).format('YYYY-MM-DD')},
    },
}
</script>
