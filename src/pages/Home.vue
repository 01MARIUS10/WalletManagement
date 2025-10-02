<script
  setup
  lang="ts"
>
import AppLayout from './Layout/AppLayout.vue';
import UserGreeting from '@/features/User/components/UserGreeting.vue';
import UserBalance from '@/features/User/components/UserBalance.vue';

import FloatingAdd from '@/components/Button/FloatingAdd.vue';
import PerCategorieList from '@/features/Categorie/components/PerCategorieList.vue';
import RecentTransaction from '@/features/Transaction/components/RecentTransaction.vue';
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
      <PerCategorieList />

      <!-- Content -->
      <RecentTransaction />
      
      <FloatingAdd @open="console.log('onOpen')" />
    </div>
  </AppLayout>
</template>
