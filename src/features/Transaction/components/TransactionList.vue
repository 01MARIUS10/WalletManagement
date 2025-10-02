<script
  setup
  lang="ts"
>
import SelectAmountIntervall from '@/features/Transaction/components/TransactionFilter/SelectAmountIntervall.vue';
import SelectCategories from '@/features/Transaction/components/TransactionFilter/SelectCategories.vue';
import SelectDate from '@/features/Transaction/components/TransactionFilter/SelectDate.vue';
import SelectInOutCome from '@/features/Transaction/components/TransactionFilter/SelectInOutCome.vue';

</script>

<template>


  <!-- Content -->
  <div class="flex-1 overflow-y-auto">
    <!-- Search and Filters -->
    <div class="mb-4">
      <input
        type="text"
        placeholder="Rechercher une transaction..."
        class="w-full border rounded-lg p-2 mb-2 bg-white text-gray-700"
      />
      <div class="">
        <SelectAmountIntervall />
        <SelectCategories />
        <SelectDate />
        <SelectInOutCome />
      </div>
    </div>

    <!-- Transactions List -->
    <div class="bg-white rounded-lg shadow p-4">
      <h2 class="text-lg font-semibold mb-2">Liste des Transactions</h2>
      <ul class="space-y-3">
        <li class="flex justify-between items-center border-b pb-2">
          <div>
            <span class="block">🍔 Repas</span>
            <span class="text-sm text-gray-500">15/09/2025</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-red-500 font-semibold">-5€</span>
            <button class="text-blue-600 hover:text-blue-800">✏️</button>
            <button class="text-red-600 hover:text-red-800">🗑️</button>
          </div>
        </li>
        <li class="flex justify-between items-center border-b pb-2">
          <div>
            <span class="block">🎮 Jeu vidéo</span>
            <span class="text-sm text-gray-500">14/09/2025</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-red-500 font-semibold">-20€</span>
            <button class="text-blue-600 hover:text-blue-800">✏️</button>
            <button class="text-red-600 hover:text-red-800">🗑️</button>
          </div>
        </li>
        <li class="flex justify-between items-center border-b pb-2">
          <div>
            <span class="block">💰 Argent de poche</span>
            <span class="text-sm text-gray-500">13/09/2025</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-green-500 font-semibold">+50€</span>
            <button class="text-blue-600 hover:text-blue-800">✏️</button>
            <button class="text-red-600 hover:text-red-800">🗑️</button>
          </div>
        </li>
      </ul>
    </div>
  </div>



</template>
