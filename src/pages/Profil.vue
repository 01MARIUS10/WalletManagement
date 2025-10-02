<script
  setup
  lang="ts"
>
import AppLayout from './Layout/AppLayout.vue';
import UserProfil from '@/features/User/components/UserProfil.vue';
import HeaderApp from '@/widgets/HeaderApp.vue';

</script>

<template>
  <AppLayout>
    <!-- Content -->
     <div class="bg-indigo-700 text-gray-100">
       <HeaderApp />
       <UserProfil />
     </div>
    <div class="flex-1 p-4">
      <div class="overflow-y-auto p-4">

        <!-- Budget -->
        <div class="bg-white rounded-lg shadow p-4 mb-4">
          <h2 class="text-lg font-semibold mb-2">Budget</h2>
          <p class="text-gray-600">Budget mensuel : <span
              class="font-semibold">200€</span></p>
          <button class="mt-2 text-blue-600 hover:text-blue-800">Modifier
            Budget</button>
        </div>

        <!-- Settings -->
        <div class="bg-white rounded-lg shadow p-4">
          <h2 class="text-lg font-semibold mb-2">Paramètres</h2>
          <ul class="space-y-2">
            <li>
              <button
                class="w-full text-left text-blue-600 hover:text-blue-800">Changer
                le mot de passe</button>
            </li>
            <li>
              <button
                class="w-full text-left text-blue-600 hover:text-blue-800">Notifications</button>
            </li>
            <li>
              <button
                class="w-full text-left text-red-600 hover:text-red-800">Déconnexion</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
