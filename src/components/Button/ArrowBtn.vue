<template>
  <button
    class="flex items-center gap-2 py-1 rounded bg-gray-100 hover:bg-gray-200 transition"
    @click="$emit('toggle')"
    type="button"
  >
    <span class="text-sm">{{ text }}</span>
    <i
      :class="isUp ? 'pi pi-chevron-up' : 'pi pi-chevron-down'"
      style="font-size: 1rem"
    ></i>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  text: string
  isUp: boolean
}>()
defineEmits<{
  (e: 'toggle'): void
}>()
</script>