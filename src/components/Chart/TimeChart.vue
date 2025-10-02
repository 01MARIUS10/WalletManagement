<template>
  <div class="card  scale-[.9]" >
    <Chart
      type="line"
      :data="computedChartData"
      :options="computedChartOptions"
      class="h-[50vh]"
    />
  </div>
</template>

<script
  setup
  lang="ts"
>
import { computed } from "vue";
import Chart from "primevue/chart";
import type { ChartDataset } from "./ChartType";

const props = defineProps<{
  labels: string[]
  datasets: ChartDataset[]
  chartTitle?: string
}>()

// Couleurs définies en variables
const depenseColor = "#A20A0A"
const revenuColor = "#799351"
const otherColor = "#06b6d4"
const textColor = '#4a5565'
const textColorSecondary = "#042f2e"
const surfaceBorder = "#364153"

const computedChartData = computed(() => {
  return {
    labels: props.labels,
    datasets: props.datasets.map((ds) => ({
      ...ds,
      borderColor: ds.borderColor || otherColor,
      tension: 0.4,
      backgroundColor: ds.label !== 'Dépenses' ? revenuColor : depenseColor
    }))
  }
})

const maxY = computed(() => {
  return Math.max(
    ...props.datasets.flatMap(ds => ds.data)
  )
})

const computedChartOptions = computed(() => {
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
        min: 0,         // Valeur minimale affichée sur l’axe Y
        max: maxY.value,       // Valeur maximale affichée sur l’axe Y (adapte selon tes données)

        ticks: {
          color: textColorSecondary,
          // maxTicksLimit: 5 // Limite à 5 graduations sur l'axe Y
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
