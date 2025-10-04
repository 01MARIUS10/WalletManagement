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
          v-for="tx in transactions"
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
import { defineProps,ref } from 'vue'
import type { Transaction } from '@/features/Transaction/types'
// import { mockTransactions } from '../data'
import { fetchRecentTransactions } from '../Services/transaction';
import { PostgrestError } from '@supabase/supabase-js';
import { formatAmount, formatDate } from '../helper';

const emits = defineEmits<{
  (e: 'see-all'): void
}>()

function onSeeAll() {
  emits('see-all')
}


function amountClass(amount: number) {
  return amount < 0 ? 'text-red-500' : 'text-green-600'
}

const transactions = ref<Transaction[]>([])
async function loadTransactions() {
  const result = await fetchRecentTransactions(3) as { data: Transaction[]; error: PostgrestError | null };
  if (result.error) {
    console.error("Erreur lors de la récupération des transactions :", result.error);
  } else {
    transactions.value = result.data;
  }
}
loadTransactions()
</script>