<template>
    <div class="col table-wrapper" >
        <div class="col">
            <div class="row">
                <span>показывать колонки</span>
                <span class="field-select" >some field</span>
                <span class="field-select" >some field</span>
                <span class="field-select" >some field</span>
                <span class="field-select" >some field</span>
                <span class="field-select" >some field</span>
                <span class="field-select" >some field</span>
                <span class="field-select" >some field</span>
                <span class="field-select" >some field</span>
                <span class="field-select" >some field</span>
            </div>
            <hr>
            <div class="table-filters row">
                <div class="row table-filter">
                    <i class="fas fa-calendar-alt"></i> <input type="date" :value="today"><input type="date" :value="today">
                    <button class="btn success">применить</button>
                </div>
                <div class="row table-filter">
                    <i class="fas fa-search"></i><input type="text" placeholder="поиск по слову">
                </div>
                <div class="row table-filter">
                    <i class="fas fa-sort-amount-up"></i>
                    <select name="" id="">
                        <option value="10">10</option>
                        <option value="100">100</option>
                        <option value="1000">1000</option>
                    </select>
                </div>

            </div>

        </div>
        <table class="table simple-table">
            <thead>
                <tr>
                <th><i class="fas fa-caret-down"></i> some item</th>
                <th><i class="fas fa-caret-down"></i> some item12</th>
                <th><i class="fas fa-caret-down"></i> some item333</th>
                <th><i class="fas fa-caret-down"></i> some item</th>
                <th><i class="fas fa-caret-down"></i> some item12</th>
                <th><i class="fas fa-caret-down"></i> some item333</th>
                <th><i class="fas fa-caret-down"></i> some item</th>
                <th><i class="fas fa-caret-down"></i> some item12</th>
                <th><i class="fas fa-caret-down"></i> some item333</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="i in 50">
                    <td>item1</td>
                    <td>item2</td>
                    <td>item3</td>
                    <td>item1</td>
                    <td>item2</td>
                    <td>item3</td>
                    <td>item1</td>
                    <td>item2</td>
                    <td>item3</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>
<script>
import moment from 'moment'
export default {
 computed:{
     today:() => moment( new Date().now ).format('YYYY-MM-DD')
    
 },
 mounted(){
     
 },
}
</script>


