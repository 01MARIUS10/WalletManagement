<template>
    <div class="card flex justify-between items-center mb-2">      
        <h3 class="font-semibold text-black">types :</h3>
        <div class="flex gap-2">
            <span
                v-for="(cat, idx) in categories"
                :key="cat.label"
                class="px-3 py-1 rounded cursor-pointer transition-colors"
                :class="cat.active ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'"
                @click="toggleCategory(idx)"
            >
                {{ cat.label }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const categories = ref([
    { label: 'Depense', active: true },
    { label: 'Revenus', active: true },
]);

function toggleCategory(index: number) {
    categories.value[index].active = !categories.value[index].active;
}
</script>