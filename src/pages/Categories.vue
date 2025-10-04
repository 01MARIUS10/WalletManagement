<script setup lang="ts">
import AppLayout from './Layout/AppLayout.vue';
import FloatingAdd from '@/components/Button/FloatingAdd.vue';
import HeaderApp from '@/widgets/HeaderApp.vue';
import { computed } from 'vue';
import { mockTransactions } from '@/features/Transaction/data';
import type { CategorieStat } from '@/features/Categorie/types';

// Calcul dynamique des stats par catégorie à partir du mockTransactions
const categories = computed<CategorieStat[]>(() => {
  let spendTotal:number = 0;
  // Regroupe les transactions par catégorie
  const stats: Record<string, CategorieStat> = {};
  mockTransactions.forEach(t => {
    if (!stats[t.category]) {
      stats[t.category] = {
        name: t.category,
        icon: t.iconCategory,
        amount: 0,
        percent:0,
        description:""
      };
    }
    stats[t.category].amount += t.amount;
    spendTotal+=t.amount;
  });

  // Génère la description selon le montant
  return Object.values(stats).map(cat => {
    const percent = cat.amount / spendTotal;
    cat = {...cat,percent:percent};

    return ({
    ...cat,
    description:
      cat.amount < 0
        ? `${Math.abs(cat.amount)}€ dépensés`
        : `${cat.amount}€ reçus`
  })
});
});
</script>

<template>
  <AppLayout>
    <div class="bg-white shadow ">
      <HeaderApp />
    </div>
    <div class="min-h-[calc(100vh - calc(96px + 60px)] p-4">
      <!-- Content -->
      <div class="flex-1 overflow-y-auto">
        <!-- Categories List -->
        <div>
          <h2 class="text-lg font-semibold mb-3">Liste des Catégories</h2>
          <ul class="space-y-3">
            <li
              v-for="cat in categories"
              :key="cat.name"
              class="flex justify-between items-center p-1 bg-white rounded-lg px-2"
            >
              <div class="flex items-center">
                <span class="text-2xl mr-2">{{ cat.icon }}</span>
                <div>
                  <span class="block font-semibold">{{ cat.name }}</span>
                  <span class="text-sm text-gray-500">{{ cat.description }}</span>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <button class="text-blue-600 hover:text-blue-800">✏️</button>
                <button class="text-red-600 hover:text-red-800">🗑️</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <FloatingAdd @open="console.log('onOpen')" />
    </div>
  </AppLayout>
</template>
