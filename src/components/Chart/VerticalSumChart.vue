<template>
  <div class="card m-3 scale-[.9]" >
    <Chart
      type="bar"
      :data="computedChartData"
      :options="computedChartOptions"
      class="h-[50vh]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Chart from "primevue/chart";
import type { ChartDataset } from "./ChartType";

const props = defineProps<{
  labels: string[]
  datasets: ChartDataset[]
  chartTitle?: string
}>()


const depenseColor = "#A20A0A"
const revenuColor = "#799351"
const otherColor = "#06b6d4"

const computedChartData = computed(() => {
  return {
    labels: props.labels,
    datasets: props.datasets.map((ds, i) => ({
      ...ds,
      borderColor: ds.borderColor || otherColor,
      backgroundColor: (ds.label!=='Dépenses') ? revenuColor : depenseColor
    }))
  }
})

const computedChartOptions = computed(() => {
  const textColor = '#4a5565';
  const textColorSecondary = "#042f2e";
  const surfaceBorder = "#364153";

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      },
      title: props.chartTitle
        ? {
            display: true,
            text: props.chartTitle,
            color: textColor,
            font: { size: 18 }
          }
        : undefined
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
          font: { weight: 500 }
        },
        grid: {
          display: false,
          drawBorder: false
        }
      },
      y: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder,
          drawBorder: false
        }
      }
    }
  }
})
</script>
