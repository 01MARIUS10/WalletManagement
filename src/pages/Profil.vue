<script
  setup
  lang="ts"
>
import AppLayout from './Layout/AppLayout.vue';
import UserProfil from '@/features/User/components/UserProfil.vue';
import HeaderApp from '@/widgets/HeaderApp.vue';

import ChartTransactionByCategorie from '@/features/Transaction/components/ChartTransactionByCategorie.vue';
import ChartTransactionByTime from '@/features/Transaction/components/ChartTransactionByTime.vue';
import IconButton from '@/components/Button/IconButton.vue';
</script>

<template>
  <AppLayout>
    <!-- Content -->
     <div class="bg-indigo-700 text-gray-100">
       <HeaderApp />
       <UserProfil />
     </div>
     <ChartTransactionByTime />
     <!-- <ChartTransactionByCategorie /> -->
    <div class="flex-1 p-4">
      <div class="overflow-y-auto p-4">
        <!-- Settings -->
        <IconButton 
        icon="pi-sign-out" 
        label="Se deconnecter" 
        @click="console.log('onSettings')" 
        class="bg-red-700 text-gray-100 p-3 rounded-2xl w-full flex justify-center items-center gap-2"
        />
      </div>
    </div>
  </AppLayout>
</template>
