<template>
  <div>
    <TimeChart
      :labels="chartData.labels"
      :datasets="chartData.datasets"
      chartTitle="Évolution des transactions dans le temps"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import TimeChart from '@/components/Chart/TimeChart.vue'
import type { ChartDataset } from '@/components/Chart/ChartType'
import { mockTransactions } from '@/features/Transaction/data'
import type { Transaction } from '@/features/Transaction/types'

// Interval peut être 'day', 'week', 'month', 'year'
const interval = ref('month')

// Period formatter dépend de l'interval
const periodFormatter = computed(() => {
  switch (interval.value) {
    case 'day': return 'hour'
    case 'week': return 'day'
    case 'month': return 'day'
    case 'year': return 'month'
    default: return 'day'
  }
})

// Formater la date selon le period formatter
const formatDate = (date: Date, formatter: string): string => {
  switch (formatter) {
    case 'hour':
      return `${date.getHours()}h`
    case 'day':
      return new Intl.DateTimeFormat('fr-FR', { weekday: 'short' }).format(date)
    case 'month':
      return new Intl.DateTimeFormat('fr-FR', { month: 'short' }).format(date)
    default:
      return date.toLocaleDateString('fr-FR')
  }
}

// Obtenir la clé de période pour grouper les transactions
const getPeriodKey = (date: Date, formatter: string): string => {
  switch (formatter) {
    case 'hour':
      return `${date.getHours()}`
    case 'day':
      return date.toISOString().split('T')[0] // YYYY-MM-DD
    case 'month':
      return `${date.getFullYear()}-${date.getMonth() + 1}`
    default:
      return date.toISOString().split('T')[0]
  }
}

// Créer les données du graphique
const chartData = computed(() => {
  // Préparer les données groupées
  const transactionsData = mockTransactions.map(t => ({
    ...t,
    date: new Date(t.date),
    amount: Number(t.amount)
  }))

  // Grouper par période
  const groupedByPeriod: Record<string, { date: Date, expenses: number, revenues: number }> = {}
  
  transactionsData.forEach(t => {
    const periodKey = getPeriodKey(t.date, periodFormatter.value)
    
    if (!groupedByPeriod[periodKey]) {
      groupedByPeriod[periodKey] = {
        date: t.date,
        expenses: 0,
        revenues: 0
      }
    }
    
    if (t.amount < 0) {
      groupedByPeriod[periodKey].expenses += Math.abs(t.amount)
    } else {
      groupedByPeriod[periodKey].revenues += t.amount
    }
  })

  // Trier les périodes chronologiquement
  const sortedPeriods = Object.keys(groupedByPeriod).sort()
  
  // Préparer les labels et datasets
  const labels = sortedPeriods.map(key => formatDate(groupedByPeriod[key].date, periodFormatter.value))
  
  const datasets: ChartDataset[] = [
    {
      label: 'Dépenses',
      data: sortedPeriods.map(key => groupedByPeriod[key].expenses),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgb(255, 99, 132)',
      // borderWidth: 1
    },
    {
      label: 'Revenus',
      data: sortedPeriods.map(key => groupedByPeriod[key].revenues),
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgb(75, 192, 192)',
      // borderWidth: 1
    }
  ]

  return {
    labels,
    datasets
  }
})

// Permettre de changer l'intervalle depuis l'extérieur
const changeInterval = (newInterval: 'day' | 'week' | 'month' | 'year') => {
  interval.value = newInterval
}

// Exposer la méthode pour permettre à un composant parent de changer l'intervalle
defineExpose({ changeInterval })
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
}
</style>