
<script>
import { Bar } from 'vue-chartjs'
import moment from 'moment'
export default {
  props:['chart-label'],
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: this.chartLabel || 'без названия',
          backgroundColor: '#17BEBB',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    });

  },
}
</script>