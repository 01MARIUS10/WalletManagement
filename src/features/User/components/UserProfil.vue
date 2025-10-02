<template>
  <div class="w-full flex justify-center items-center">
    <div class="w-full shadow-lg mt-[120px]">
      <div class="bg-white rounded-t-2xl p-4 -mt-10 relative">
        <div class="flex flex-col items-center">
          <img
            :src="user.avatarUrl"
            :alt="user.name"
            class="w-20 h-20 rounded-full border-4 border-white absolute -top-10"
          />
          <h2 class="text-lg font-semibold text-gray-800 mt-10">{{ user.name }}</h2>
          <p class="text-gray-600">{{ user.email }}</p>
          <p class="text-gray-600">
            <span class="font-semibold">Balance : </span>
            {{ balanceFormat }} 
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/features/User/stores/user'
const userStore = useUserStore()
const { user,balanceFormat } = storeToRefs(userStore)

</script>