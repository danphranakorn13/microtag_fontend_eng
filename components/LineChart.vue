<template>
  <LineChartGenerator
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
</template>

<script>
import { Line as LineChartGenerator } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
);

export default {
  name: "LineChart",
  components: {
    LineChartGenerator,
  },
  props: {
    chartId: {
      type: String,
      default: "line-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
    chartData: {
      type: Object,
      default: () => ({
        labels: [
          "0",
          "10",
          "20",
          "30",
          "40",
          "50",
          "60",
          "0",
          "10",
          "20",
          "30",
          "40",
          "50",
          "60",
        ],
        datasets: [
          {
            borderColor: "#15803d",
            backgroundColor: "#166534",
            data: [40, 39, 10, 40, 39, 80, 35, 40, 39, 10, 40, 39, 80, 35],
          },
        ],
      }),
    }
  },
  data() {
    return {
      // chartData: {
      //   labels: [
      //     "0",
      //     "10",
      //     "20",
      //     "30",
      //     "40",
      //     "50",
      //     "60",
      //     "0",
      //     "10",
      //     "20",
      //     "30",
      //     "40",
      //     "50",
      //     "60",
      //   ],
      //   datasets: [
      //     {
      //       borderColor: "#15803d",
      //       backgroundColor: "#166534",
      //       data: [40, 39, 10, 40, 39, 80, 35, 40, 39, 10, 40, 39, 80, 35],
      //     },
      //   ],
      // },
      chartOptions: {
        scales: {
          x: {
            display:false
          },
          y: {
            display:false
          }
        },
        plugins:{
          legend: {
            display: false
          }
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>
