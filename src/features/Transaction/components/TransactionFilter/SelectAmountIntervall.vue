<template>
    <div class="card flex justify-between items-center mb-2">
        <h3 class=" font-semibold text-black">montant :</h3>
        <div class="">
            <div class="relative">
                <span
                    class="absolute top-2"
                    :style="{ left: 'calc(' + percents[0] + '% - 10px)' }"
                >{{ values[0] }}</span>
                <span
                    class="absolute top-2"
                    :style="{ left: 'calc(' + percents[1] + '% - 10px)' }"
                >{{ values[1] }}</span>
            </div>
            <Slider
                v-model="values"
                range
                class="w-56"
                :min="min"
                :max="max"
            />
        </div>
    </div>
</template>

<script
    setup
    lang="ts"
>
import { ref, computed } from 'vue';
import { Slider } from 'primevue';
const min = 0
const max = 200
const percents = computed(() => {
    return values.value.map((val) => (val) / (max - min) * 100)
})
const values = ref<[number, number]>([20, 80]);
</script>