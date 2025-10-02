<script
  setup
  lang="ts"
>
import SelectAmountIntervall from '@/features/Transaction/components/TransactionFilter/SelectAmountIntervall.vue';
import SelectCategories from '@/features/Transaction/components/TransactionFilter/SelectCategories.vue';
import SelectDate from '@/features/Transaction/components/TransactionFilter/SelectDate.vue';
import SelectInOutCome from '@/features/Transaction/components/TransactionFilter/SelectInOutCome.vue';
import { ref } from 'vue';
import ArrowBtn from '@/components/Button/ArrowBtn.vue';
import { mockTransactions } from '../data';

const showFilters = ref(false);
const transactions = ref(mockTransactions);
</script>

<template>
  <!-- Content -->
  <div class="flex-1 ">
    <!-- Transactions List -->
    <div class=" ">
      <div class="flex justify-between  mb-2">
        <h2 class="text-lg font-semibold">Liste des Transactions</h2>

        <ArrowBtn
          text="Filtres"
          :isUp="showFilters"
          @toggle="showFilters = !showFilters"
        />

      </div>
      <!-- Search and Filters -->
      <div class="mb-4">
        <input
          type="text"
          placeholder="Rechercher une transaction..."
          class="w-full border rounded-lg p-2 mb-2 bg-white text-gray-700"
        />
        <div v-if="showFilters"  class=" py-2">
          <div >
            <SelectInOutCome />
            <SelectAmountIntervall />
            <SelectCategories />
            <SelectDate />
          </div>
        </div>

      </div>

      <ul class="space-y-3">
        <li
          v-for="transaction in transactions"
          :key="transaction.id"
          class="flex justify-between items-center border-0 p-1 bg-white rounded-lg px-2"
        >
          <div>
            <span class="block">{{ transaction.label }}</span>
            <span class="text-sm text-gray-500">{{ transaction.date }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <span
              :class="transaction.amount < 0 ? 'text-red-500' : 'text-green-500'"
              class="font-semibold"
            >
              {{ transaction.amount > 0 ? '+' : '' }}{{ transaction.amount }}MGA
            </span>
            <button class="text-blue-600 hover:text-blue-800">✏️</button>
            <button class="text-red-600 hover:text-red-800">🗑️</button>
          </div>
        </li>
      </ul>
    </div>
  </div>



</template>
