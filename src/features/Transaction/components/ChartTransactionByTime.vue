<!-- filepath: /home/marius/Documents/Project/SpendManagement/SpendManagement/src/features/Transaction/components/ChartTransaction.vue -->
<template>
  <div>
    <TimeChart
      :labels="labelChart"
      :datasets="datasets"
      chartTitle="Évolution des transactions dans le temps"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TimeChart from '@/components/Chart/TimeChart.vue'
import type { ChartDataset } from '@/components/Chart/ChartType'
import { mockTransactions } from '../data'

// Récupérer toutes les dates triées (labels de l'axe X)
const labelChart = computed(() => {
  // On extrait les dates uniques et on les trie
  const dates = Array.from(new Set(mockTransactions.map(t => t.date)))
  dates.sort()
  return dates
})

// Générer les datasets dynamiquement
const datasets = computed<ChartDataset[]>(() => {
  // On suppose deux types : Dépenses (amount < 0) et Revenu (amount > 0)
  const depenses: number[] = []
  const revenus: number[] = []

  labelChart.value.forEach(date => {
    // Somme des dépenses pour cette date
    const depenseJour = mockTransactions
      .filter(t => t.date === date && t.amount < 0)
      .reduce((sum, t) => sum + Math.abs(t.amount), 0)
    depenses.push(depenseJour)

    // Somme des revenus pour cette date
    const revenuJour = mockTransactions
      .filter(t => t.date === date && t.amount > 0)
      .reduce((sum, t) => sum + t.amount, 0)
    revenus.push(revenuJour)
  })

  return [
    {
      label: 'Dépenses',
      data: depenses,
      backgroundColor: '#A20A0A',
      borderColor: '#A20A0A'
    },
    {
      label: 'Revenu',
      data: revenus,
      backgroundColor: '#799351',
      borderColor: '#799351'
    }
  ]
})
</script>