
<template>
    <div class="card flex justify-between items-center">
      <h3 class=" font-semibold text-black">Date :</h3>
      <DatePicker updateModelType="dateRange"  v-model="dates" selectionMode="range" :manualInput="false" size="small" showIcon />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DatePicker from "primevue/datepicker";

type DateRange = (Date)[];

const dates = ref<DateRange>([new Date(), new Date()]);
</script>


<style scoped>
:deep(.p-inputtext.p-component.p-filled.p-inputtext-sm.p-inputfield-sm.p-datepicker-input) {
  width: auto;
  background-color: white;
  padding:2px 5px;
  border-top-left-radius: 0.375rem; /* rounded-md */
  border-bottom-left-radius: 0.375rem; /* rounded-md */
  border: 1px solid #d1d5db; /* border-gray-300 */
  color: #374151; /* text-gray-700 */
}
:deep(.p-datepicker-dropdown) {
  border-top-right-radius: 0.375rem; /* rounded-md */
  border-bottom-right-radius: 0.375rem; /* rounded-md */
  padding:2px 5px;
  background-color: white;
  border: 1px solid #d1d5db; /* border-gray-300 */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* shadow-sm */
}
:deep(.p-datepicker-header) {
  background-color: #f9fafb; /* bg-gray-50 */
  border-bottom: 1px solid #d1d5db; /* border-gray-300 */
}

:deep(.p-datepicker-panel) {
  color: #111827; /* text-gray-900 */
  font-weight: 600; /* font-semibold */
  background-color: white !important;
}
:deep(.p-datepicker-panel.p-component , .p-datepicker-calendar-container) {
  color: #111827; /* text-gray-900 */
  font-weight: 600; /* font-semibold */
  background-color: white !important;
}
:deep(.p-datepicker-calendar td.p-datepicker-day.p-datepicker-other-month) {
  color: #9ca3af; /* text-gray-400 */
}
:deep(.p-datepicker-calendar td.p-datepicker-day:hover) {
  background-color: #e5e7eb; /* bg-gray-200 */
} 
</style>