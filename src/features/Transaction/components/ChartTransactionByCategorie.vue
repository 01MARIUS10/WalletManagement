<!-- filepath: /home/marius/Documents/Project/SpendManagement/SpendManagement/src/features/Transaction/components/ChartTransaction.vue -->
<template>
  <div>
    <VerticalSumChart
      :labels="labels"
      :datasets="datasets"
      chartTitle="Dépenses par Catégorie"
    />
  </div>
</template>

<script setup lang="ts">
import VerticalSumChart from '@/components/Chart/VerticalSumChart.vue'
import type { ChartDataset } from '@/components/Chart/ChartType'

// Mock data pour le chart
const labels = ['Nourriture', 'Loisirs', 'Transport', 'Santé', 'Logement']

const datasets: ChartDataset[] = [
  {
    label: 'Dépenses',
    data: [120, 80, 60, 40, 200],
    backgroundColor: '#6366f1', // Indigo-500
  },
  {
    label: 'Revenu',
    data: [10, 20, 0, 10, 100],
    backgroundColor: '#6306f1', // Indigo-500
  }
]
</script>