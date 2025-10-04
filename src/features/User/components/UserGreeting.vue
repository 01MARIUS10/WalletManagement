<script
  lang="ts"
  setup
>

import { storeToRefs } from 'pinia'
import { useUserStore } from '@/features/User/stores/user'
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
</script>
<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-xl font-bold text-gray-800">Hello,</h1>
      <h2 class="text-2xl font-semibold text-indigo-700">{{user.name}}!</h2>
    </div>
  </div>
</template>