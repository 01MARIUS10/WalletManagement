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


import { storeToRefs } from 'pinia'
import { useUserStore } from '@/features/User/stores/user'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)
</script>

<template>
  <AppLayout>
    <div class="min-h-[calc(100vh - 96px)] p-4">
      <!-- Header -->
      <div class=" pt-6">
        <UserGreeting :name="user.name"/>
      </div>
      <!-- Current Balance -->
      <div class="my-4">
        <UserBalance :balance="user.account" />
      </div>

      <!-- Content -->
      <PerCategorieList />

      <!-- Content -->
      <RecentTransaction />

      <FloatingAdd @open="console.log('onOpen')" />
    </div>
  </AppLayout>
</template>
