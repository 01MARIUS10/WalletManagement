<template>
  <div class="card flex flex-col items-center gap-4">
    <Select
      v-model="modelValueLocal"
      :options="options"
      optionLabel="label"
      :placeholder="placeholder"
      :size="size"
      class="w-full md:w-56"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Select } from 'primevue';
import type { SelectType } from './SelectType';

const props = defineProps<{
  modelValue: SelectType
  options: SelectType[]
  optionLabel?: string
  placeholder?: string
  size?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

const modelValueLocal = ref(props.modelValue)

watch(() => props.modelValue, (val) => {
  modelValueLocal.value = val
})

watch(modelValueLocal, (val) => {
  emit('update:modelValue', val)
})
</script>

<style scoped>
:deep(.p-select){
  background-color: white;
  color:black;
  /* border:0; */
  /* box-shadow: none; */
}
:deep(.p-select-label, .p-select-dropdown){
  color:black;
  padding: 0 2px;
}

:deep(.p-select-dropdown){
  color:black;
  padding: 0 2px;
  width: 1rem;
}
</style>