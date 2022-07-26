<template>
    <div class="mt-5 mb-10">

        <div class="w-full mb-5">
          <RealtimeAlert/>
        </div>

        <div class="flex flex-wrap items-center justify-between mb-5 space-y-2">
            <!-- title -->
            <div class="w-full md:w-1/2">
                <h1 class="text-3xl text-center md:text-left font-blod">RPI-0001</h1>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-4 p-8 bg-white border-2 border-gray-200 shadow-md md:grid-cols-2">
            <!-- title -->
            <div class="flex w-full mb-5 md:col-span-2">
                <h1 class="w-full text-2xl text-center md:text-3xl md:text-left font-blod">ตู้คอนเทนเนอร์ทั้งหมด(150 ตู้)</h1>
            </div>
            <div class="flex w-full md:col-span-2">
                <Doughnut
                    class="w-full"
                    :chart-options="chartOptions"
                    :chart-data="chartData"
                    :chart-id="chartId"
                    :dataset-id-key="datasetIdKey"
                    :plugins="plugins"
                    :css-classes="cssClasses"
                    :styles="styles"
                    :width="width"
                    :height="height"
                />
            </div>
        
        </div>
    </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs/legacy'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  components: {
    Doughnut
  },
  props: {
    chartId: {
      type: String,
      default: 'doughnut-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chartData: {
        labels: ['10 ฟุต', '20 ฟุต', '30 ฟุต', '40 ฟุต'],
        datasets: [
          {
            backgroundColor: ['#ef4444', '#f97316', '#3b82f6', '#22c55e'],
            data: [40, 20, 80, 10]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>
