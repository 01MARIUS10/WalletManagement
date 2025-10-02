<template>
  <div class="card flex flex-col items-center gap-4">
    <Select
      v-model="period"
      :options="periods"
      optionLabel=""
      placeholder="Periode"
      size="small"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Select from '@/components/Select/Select.vue';
import type { SelectType } from '@/components/Select/SelectType';

const period = ref(null);
const periods = ref<SelectType[]>([
  { label: 'Jour', code: 'D' },
  { label: 'Semaine', code: 'W' },
  { label: 'Mois', code: 'M' },
]);
</script>
