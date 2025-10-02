<template>
  <div class="w-full flex justify-center items-center">
    <div class="w-full shadow-lg mt-[120px]">
      <div class="bg-white rounded-t-2xl p-4 -mt-10 relative">
        <div class="flex flex-col items-center">
          <img
            :src="props.avatar"
            :alt="props.name"
            class="w-20 h-20 rounded-full border-4 border-white absolute -top-10"
          />
          <h2 class="text-lg font-semibold text-gray-800 mt-10">{{ props.name }}</h2>
          <p class="text-gray-600">{{ props.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

const props = withDefaults(defineProps<{
  name?: string
  email?: string
  avatar?: string
  coverColor?: string
}>(), {
  name: 'Marius Tsiorimbola',
  email: 'mariustsiorimbola@gmail.com',
  avatar: "https://i.pinimg.com/474x/32/e4/61/32e46132a367eb48bb0c9e5d5b659c88.jpg",
  coverColor: 'transparent'
})
</script>