<script
  setup
  lang="ts"
>
import AppLayout from './Layout/AppLayout.vue';
import FloatingAdd from '@/components/Button/FloatingAdd.vue';
import HeaderApp from '@/widgets/HeaderApp.vue';

import TransactionList from '@/features/Transaction/components/TransactionList.vue';
</script>

<template>

  <AppLayout>
    <div class="bg-white shadow">
      <HeaderApp />
    </div>
    <div class="min-h-screen p-4">

      <!-- Content -->
      <div class="flex-1 overflow-y-auto">
        <TransactionList />
      </div>



      <FloatingAdd @open="console.log('onOpen')" />
    </div>
  </AppLayout>
</template>
