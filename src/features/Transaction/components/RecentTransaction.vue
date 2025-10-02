<template>
  <div class="flex-1 overflow-y-auto py-4 mt-4">
    <!-- Recent Transactions -->
    <div>
      <div class="flex justify-between items-center mb-2">
        <h4 class="text-lg font-semibold text-gray-700">Recent Transactions</h4>
        <a href="#" class="text-sm text-indigo-600 hover:text-indigo-800" @click.prevent="onSeeAll">See all</a>
      </div>

      <ul class="space-y-2">
        <li
          v-for="tx in txs"
          :key="tx.id"
          class="flex justify-between items-center p-2 bg-white rounded-lg"
        >
          <div class="flex items-center">
            <img :src="tx.image" :alt="tx.label" class="w-6 h-6 mr-2" />
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
import { defineProps, defineEmits,computed } from 'vue'
import type { Transaction } from '@/features/Transaction/types'

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
const defaultTransactions: Transaction[] = [
  {
    id: 1,
    label: 'Apple Inc.',
    amount: -230.5,
    category: 'Tech',
    icon: '🍏',
    date: '2023-09-21T15:02:00',
    image: 'https://imgs.search.brave.com/q1wrujWOTPG5DYL_X7H4YSQz3JRtdmFd1D_8T0vNOwk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9mL2ZhL0Fw/cGxlX2xvZ29fYmxh/Y2suc3ZnLzI1MHB4/LUFwcGxlX2xvZ29f/YmxhY2suc3ZnLnBu/Zw',
  },
  {
    id: 2,
    label: 'Adobe',
    amount: -130.5,
    category: 'Tech',
    icon: '🅰️',
    date: '2023-09-21T15:22:00',
    image: 'https://imgs.search.brave.com/_GuGeEAwkEDYEUfLl_-JGU45tY-GNKTo4PyTG5xV5Cs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0Fkb2JlLUxvZ28t/MTk5My01MDB4MzQ0/LmpwZw',
  },
  {
    id: 3,
    label: 'Amazon',
    amount: -20.5,
    category: 'Shopping',
    icon: '🛒',
    date: '2023-09-21T14:02:00',
    image: 'https://imgs.search.brave.com/K4NQeEJv1rVc6Ima07YJquV_bh7ZFCReKh_EsAuRpNE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzk5LzA0Lzgy/LzM2MF9GXzM5OTA0/ODI5NV9iUUN6NVY3/TTJRWlZudXYwN2x3/SHVNaVFzUjRYNm83/WC5qcGc',
  },
]

// Utilise la prop si fournie, sinon la valeur par défaut
const txs = computed(() => props.transactions && props.transactions.length > 0 ? props.transactions : defaultTransactions)
</script>