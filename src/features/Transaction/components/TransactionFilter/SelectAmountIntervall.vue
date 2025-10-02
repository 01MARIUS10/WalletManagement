<template>
    <div class="card flex justify-center">
        <Slider v-model="value" range class="w-56" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Slider } from 'primevue';
const value = ref<[number, number]>([20, 80]);
</script>