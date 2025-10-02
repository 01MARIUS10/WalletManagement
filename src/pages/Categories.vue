<script
  setup
  lang="ts"
>
import AppLayout from './Layout/AppLayout.vue';
import FloatingAdd from '@/components/Button/FloatingAdd.vue';
import HeaderApp from '@/widgets/HeaderApp.vue';

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
        <div class="">
          <h2 class="text-lg font-semibold mb-3">Liste des Catégories</h2>
          <ul class="space-y-3">
            <li class="flex justify-between items-center border-b pb-2 bg-white rounded-lg px-2">
              <div class="flex items-center">
                <span class="text-2xl mr-2">🍔</span>
                <div>
                  <span class="block font-semibold">Nourriture</span>
                  <span class="text-sm text-gray-500">40€ dépensés</span>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <button class="text-blue-600 hover:text-blue-800">✏️</button>
                <button class="text-red-600 hover:text-red-800">🗑️</button>
              </div>
            </li>
            <li class="flex justify-between items-center border-b pb-2 bg-white rounded-lg px-2">
              <div class="flex items-center">
                <span class="text-2xl mr-2">🎮</span>
                <div>
                  <span class="block font-semibold">Loisirs</span>
                  <span class="text-sm text-gray-500">20€ dépensés</span>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <button class="text-blue-600 hover:text-blue-800">✏️</button>
                <button class="text-red-600 hover:text-red-800">🗑️</button>
              </div>
            </li>
            <li class="flex justify-between items-center border-b pb-2 bg-white rounded-lg px-2">
              <div class="flex items-center">
                <span class="text-2xl mr-2">🚗</span>
                <div>
                  <span class="block font-semibold">Transport</span>
                  <span class="text-sm text-gray-500">10€ dépensés</span>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <button class="text-blue-600 hover:text-blue-800">✏️</button>
                <button class="text-red-600 hover:text-red-800">🗑️</button>
              </div>
            </li>
            <li class="flex justify-between items-center border-b pb-2 bg-white rounded-lg px-2">
              <div class="flex items-center">
                <span class="text-2xl mr-2">💰</span>
                <div>
                  <span class="block font-semibold">Argent de poche</span>
                  <span class="text-sm text-gray-500">50€ reçus</span>
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
