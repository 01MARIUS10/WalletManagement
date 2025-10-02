<template>
  <button
    class="btn"
    type="button"
    :disabled="props.disabled"
    :aria-label="props.label"
    @click="handleClick"
  >
    <i
      :class="props.icon"
      class="pi"
      style="font-size: 1rem"
      aria-hidden="true"
    ></i>
    <span class="label">{{ props.label }}</span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  icon?: string
  label?: string
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  /* padding: 0.45rem 0.75rem; */
  border: 1px solid #d1d5db;
  /* background: #fff; */
  /* color: #111827; */
  /* border-radius: 6px; */
  cursor: pointer;
  font-size: 0.95rem;
  transition: background 0.12s ease, transform 0.06s ease;
}

.btn:active { transform: translateY(1px); }
.btn:focus { outline: none; box-shadow: 0 0 0 3px rgba(59,130,246,0.2); }
.btn[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

/* ensure icon and text align nicely */
.btn i { display: inline-flex; align-items: center; justify-content: center; }
.label { line-height: 1; }
</style>