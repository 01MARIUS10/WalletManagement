<template>
  <div class=" ">
    <!-- Dépenses par catégorie (simulé avec barres) -->
    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-black text-lg font-semibold m-0">Par Catégorie</h2>
        <!-- Période Filter -->
        <div class="flex justify-between mb-0">
          <SelectPeriod />
        </div>
      </div>
      <div class="space-y-5">
        <div
          v-for="cat in categorieStats"
          :key="cat.name"
          class="flex items-center mb-3"
        >
          <span class="w-24 text-sm">{{ cat.icon }} {{ cat.name }}</span>
          <div class="flex-1 bg-gray-200 h-4 ml-2 rounded">
            <div
              class="bg-blue-500 h-4 rounded"
              :style="{ width: cat.percent + '%' }"
            ></div>
          </div>
          <span class="ml-2 text-sm">{{ cat.amount }}MGA</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import SelectPeriod from './PerCategorieFilter/SelectPeriod.vue';
import type { Transaction } from "@/features/Transaction/types";
import type { CategorieStat } from "../types";
import { mockTransactions } from "@/features/Transaction/data";
const transactions = ref<Transaction[]>(mockTransactions);

// Calcul des stats par catégorie
const categorieStats = computed((): CategorieStat[] => {

  const depenses = transactions.value.filter((t: Transaction) => t.amount < 0);
  
  const total = Math.abs(depenses.reduce((sum: number, t: Transaction) => sum + t.amount, 0));
  // Regroupement par catégorie
  const stats: Record<string, { name: string, icon: string, amount: number }> = {};
  depenses.forEach((t: Transaction) => {
    if (!stats[t.category]) {
      stats[t.category] = { name: t.category, icon: t.iconCategory, amount: 0 };
    }
    stats[t.category].amount += Math.abs(t.amount);
  });
  // Calcul du pourcentage et tri du plus grand au plus petit
  return Object.values(stats)
    .map(cat => ({
      ...cat,
      percent: total ? ((cat.amount / total) * 100).toFixed(2) : 0
    }))
    .sort((a, b) => b.amount - a.amount); // Tri décroissant
});
</script>
