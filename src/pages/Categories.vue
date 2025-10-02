<script setup lang="ts">
import AppLayout from './Layout/AppLayout.vue';
import FloatingAdd from '@/components/Button/FloatingAdd.vue';
import HeaderApp from '@/widgets/HeaderApp.vue';
import { ref } from 'vue';

const categories = ref([
  {
    id: 1,
    icon: '🍔',
    name: 'Nourriture',
    amount: -40,
    description: '40€ dépensés'
  },
  {
    id: 2,
    icon: '🎮',
    name: 'Loisirs',
    amount: -20,
    description: '20€ dépensés'
  },
  {
    id: 3,
    icon: '🚗',
    name: 'Transport',
    amount: -10,
    description: '10€ dépensés'
  },
  {
    id: 4,
    icon: '💰',
    name: 'Argent de poche',
    amount: 50,
    description: '50€ reçus'
  }
]);
</script>

<template>
  <AppLayout>
    <div class="bg-white shadow">
      <HeaderApp />
    </div>
    <div class="min-h-screen p-4">
      <!-- Content -->
      <div class="flex-1 overflow-y-auto">
        <!-- Categories List -->
        <div>
          <h2 class="text-lg font-semibold mb-3">Liste des Catégories</h2>
          <ul class="space-y-3">
            <li
              v-for="cat in categories"
              :key="cat.id"
              class="flex justify-between items-center border-b pb-2 bg-white rounded-lg px-2"
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
