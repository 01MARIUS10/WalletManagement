<template>
  <!-- Floating Action Button -->
  <a
    href="#"
    @click.prevent="onClick"
    class="fixed bottom-22 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
    role="button"
    aria-label="Ajouter"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
    </svg>
  </a>
</template>
<script setup lang="ts">
const emit = defineEmits<{ (e: 'open'): void }>()

function onClick(): void {
  emit('open')
}
</script>

<style scoped>
/* petites améliorations d'accessibilité visuelle si Tailwind n'est pas présent */
a[role="button"] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
}
</style>