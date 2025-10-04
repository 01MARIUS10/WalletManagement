<script
  setup
  lang="ts"
>
import { ref } from 'vue';
import { mockTransactions } from '@/features/Transaction/data';
import type { CategorieStat } from '@/features/Categorie/types';
import { fetchCategories } from '../Services/categorieQBUse';

import type { PostgrestError } from '@supabase/supabase-js';

const categories = ref<CategorieStat[]>([]);
async function loadCategories() {
  const result = await fetchCategories() as { data: CategorieStat[]; error: PostgrestError | null };
  if (result.error) {
    console.error("Erreur lors de la récupération des catégories :", result.error);
  } else {
    categories.value = result.data;
  }
}
loadCategories()
</script>

<template>
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
</template>
