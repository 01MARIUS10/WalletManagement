<script
  setup
  lang="ts"
>
import SelectAmountIntervall from '@/features/Transaction/components/TransactionFilter/SelectAmountIntervall.vue';
import SelectCategories from '@/features/Transaction/components/TransactionFilter/SelectCategories.vue';
import SelectDate from '@/features/Transaction/components/TransactionFilter/SelectDate.vue';
import SelectInOutCome from '@/features/Transaction/components/TransactionFilter/SelectInOutCome.vue';
import { ref } from 'vue';

const showFilters = ref(false);
// Mock data pour la liste des transactions
const transactions = ref([
  {
    id: 1,
    label: '🍔 Repas',
    date: '2025-09-15',
    amount: -5,
    category: 'Nourriture',
    type: 'depense'
  },
  {
    id: 2,
    label: '🎮 Jeu vidéo',
    date: '2025-09-14',
    amount: -20,
    category: 'Loisirs',
    type: 'depense'
  },
  {
    id: 3,
    label: '💰 Argent de poche',
    date: '2025-09-13',
    amount: 50,
    category: 'Autres',
    type: 'revenu'
  }
]);
</script>

<template>


  <!-- Content -->
  <div class="flex-1 ">
    <!-- Search and Filters -->
    <div class="mb-4">
      <input
        type="text"
        placeholder="Rechercher une transaction..."
        class="w-full border rounded-lg p-2 mb-2 bg-white text-gray-700"
      />
      <div class=" border-t border-b border-black py-2">
        <button
          class="mb-2 px-3 py-1 rounded bg-indigo-500 text-white hover:bg-indigo-600 transition"
          @click="showFilters = !showFilters"
        >
          {{ showFilters ? 'Masquer les filtres' : 'Afficher les filtres' }}
        </button>
        <div v-if="showFilters">
          <SelectInOutCome />
          <SelectAmountIntervall />
          <SelectCategories />
          <SelectDate />
        </div>
      </div>

    </div>

    <!-- Transactions List -->
    <div class=" ">
      <h2 class="text-lg font-semibold mb-2">Liste des Transactions</h2>
      <ul class="space-y-3">
        <li
          v-for="transaction in transactions"
          :key="transaction.id"
          class="flex justify-between items-center border-b pb-2 bg-white rounded-lg px-2"
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
              {{ transaction.amount > 0 ? '+' : '' }}{{ transaction.amount }}€
            </span>
            <button class="text-blue-600 hover:text-blue-800">✏️</button>
            <button class="text-red-600 hover:text-red-800">🗑️</button>
          </div>
        </li>
      </ul>
    </div>
  </div>



</template>
