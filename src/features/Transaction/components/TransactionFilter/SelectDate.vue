
<template>
    <div class="card flex justify-center">
      <DatePicker v-model="dates" selectionMode="range" :manualInput="false" />
    </div>
</template>

<script lang="ts">
import { ref } from "vue";
import DatePicker from "primevue/datepicker";

type DateRange = [Date | null, Date | null];

const dates = ref<Array<any>>([null, null]);
</script>