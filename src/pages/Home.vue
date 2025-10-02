<script
  setup
  lang="ts"
>
import AppLayout from './Layout/AppLayout.vue';
import UserGreeting from '@/features/User/components/UserGreeting.vue';
import UserBalance from '@/features/User/components/UserBalance.vue';

import FloatingAdd from '@/components/Button/FloatingAdd.vue';
</script>

<template>
  <AppLayout>
    <div class="min-h-screen p-4">
      <!-- Header -->
      <div class=" pt-6">
        <UserGreeting />
      </div>
      <!-- Current Balance -->
      <div class="my-4">
        <UserBalance />
      </div>

      <!-- Content -->
      <div class=" overflow-y-auto py-4 bg-white rounded-lg shadow  ">
        <!-- Dépenses par catégorie (simulé avec barres) -->
        <div class="px-4">
          <div class="">
            <h2 class="text-lg font-semibold mb-2">Dépenses par Catégorie</h2>
            <!-- Période Filter -->
            <div class="flex justify-between mb-4">
              <select class="border rounded-lg p-2 bg-white text-gray-700">
                <option>Jour</option>
                <option>Semaine</option>
                <option selected>Mois</option>
              </select>
            </div>
          </div>
          <div class="space-y-5">
            <div class="flex items-center mb-3">
              <span class="w-24 text-sm">🍔 Nourriture</span>
              <div class="flex-1 bg-gray-200 h-4  ml-2 rounded">
                <div
                  class="bg-blue-500 h-4 rounded"
                  style="width: 66.67%"
                ></div>
              </div>
              <span class="ml-2 text-sm">40€</span>
            </div>
            <div class="flex items-center mb-3">
              <span class="w-24 text-sm">🎮 Loisirs</span>
              <div class="flex-1 bg-gray-200 h-4 ml-2 rounded">
                <div
                  class="bg-blue-500 h-4 rounded"
                  style="width: 33.33%"
                ></div>
              </div>
              <span class="ml-2 text-sm">20€</span>
            </div>
            <div class="flex items-center mb-3">
              <span class="w-24 text-sm">🚗 Transport</span>
              <div class="flex-1 bg-gray-200 h-4 ml-2 rounded">
                <div
                  class="bg-blue-500 h-4 rounded"
                  style="width: 16.67%"
                ></div>
              </div>
              <span class="ml-2 text-sm">10€</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Content -->
      <div class="flex-1 overflow-y-auto py-4 mt-4">
        <!-- Recent Transactions -->
        <div class="">
          <div class="flex justify-between items-center mb-2">
            <h4 class="text-lg font-semibold text-gray-700">Recent Transactions
            </h4>
            <a
              href="#"
              class="text-sm text-indigo-600 hover:text-indigo-800"
            >See all</a>
          </div>
          <ul class="space-y-2">
            <li
              class="flex justify-between items-center p-2 bg-white rounded-lg"
            >
              <div class="flex items-center">
                <img
                  src="https://via.placeholder.com/24"
                  alt="Apple"
                  class="w-6 h-6 mr-2"
                >
                <div>
                  <p class="text-sm font-medium">Apple Inc.</p>
                  <p class="text-xs text-gray-500">21 Sep, 03:02 PM</p>
                </div>
              </div>
              <p class="text-red-500 font-semibold">-$230.50</p>
            </li>
            <li
              class="flex justify-between items-center p-2 bg-white rounded-lg"
            >
              <div class="flex items-center">
                <img
                  src="https://via.placeholder.com/24"
                  alt="Adobe"
                  class="w-6 h-6 mr-2"
                >
                <div>
                  <p class="text-sm font-medium">Adobe</p>
                  <p class="text-xs text-gray-500">21 Sep, 03:22 PM</p>
                </div>
              </div>
              <p class="text-red-500 font-semibold">-$130.50</p>
            </li>
            <li
              class="flex justify-between items-center p-2 bg-white rounded-lg"
            >
              <div class="flex items-center">
                <img
                  src="https://via.placeholder.com/24"
                  alt="Amazon"
                  class="w-6 h-6 mr-2"
                >
                <div>
                  <p class="text-sm font-medium">Amazon</p>
                  <p class="text-xs text-gray-500">21 Sep, 02:02 PM</p>
                </div>
              </div>
              <p class="text-red-500 font-semibold">-$20.50</p>
            </li>
          </ul>
        </div>
      </div>
      <FloatingAdd @open="console.log('onOpen')" />
    </div>
  </AppLayout>
</template>
