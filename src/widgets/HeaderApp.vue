<template>
  <div v-if="!isHome" class="p-4 flex items-center justify-between">
    <button @click="goBack" aria-label="Retour" class="hover:text-gray-800">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>

    <h1 class="text-lg font-semibold ">{{ title }}</h1>

    <button @click="goBack" aria-label="Action" class=" hover:text-gray-800">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()


const isHome = computed(() => {
  const path = route.path ?? ''
  const name = String(route.name ?? '').toLowerCase()
  return path === '/' || path === '/accueil' || name === 'home' || name === 'accueil'
})

const title = computed(() => (route.meta as Record<string, any>)?.title || 'Activity')

function goBack(): void {
  router.back()
}
</script>

<style scoped>
/* Ajoutez des styles supplémentaires si nécessaire */
</style>