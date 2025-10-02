<template>
  <div class="flex-1 overflow-y-auto py-4 mt-4">
    <!-- Recent Transactions -->
    <div>
      <div class="flex justify-between items-center mb-2">
        <h4 class="text-lg font-semibold text-gray-700">Recent Transactions</h4>
        <a href="#" class="text-sm text-indigo-500 hover:text-indigo-800" @click.prevent="onSeeAll">See all</a>
      </div>

      <ul class="space-y-2">
        <li
          v-for="tx in txs"
          :key="tx.id"
          class="flex justify-between items-center p-2 bg-white rounded-lg"
        >
          <div class="flex items-center">
            <!-- <img :src="tx.image" :alt="tx.label" class="w-6 h-6 mr-2" /> -->
            <div>
              <p class="text-sm font-medium">{{ tx.label }}</p>
              <p class="text-xs text-gray-500">{{ formatDate(tx.date) }}</p>
            </div>
          </div>

          <p :class="amountClass(tx.amount)" class="font-semibold">
            {{ formatAmount(tx.amount) }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps,computed } from 'vue'
import type { Transaction } from '@/features/Transaction/types'
import { mockTransactions } from '../data'

const emits = defineEmits<{
  (e: 'see-all'): void
}>()

const props = defineProps<{
  transactions?: Transaction[]
}>()

function onSeeAll() {
  emits('see-all')
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  if (Number.isNaN(d.getTime())) return dateStr
  return new Intl.DateTimeFormat(undefined, {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(d)
}

function formatAmount(amount: number) {
  const sign = amount < 0 ? '-' : ''
  const abs = Math.abs(amount).toFixed(2)
  return `${sign}$${abs}`
}

function amountClass(amount: number) {
  return amount < 0 ? 'text-red-500' : 'text-green-600'
}

// Valeur par défaut si aucune prop n'est passée
const defaultTransactions: Transaction[] = mockTransactions.slice(0,3)
// Utilise la prop si fournie, sinon la valeur par défaut
const txs = computed(() => props.transactions && props.transactions.length > 0 ? props.transactions : defaultTransactions)
</script>