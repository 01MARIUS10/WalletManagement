<script setup lang="ts">
import WebScreenView from "./pages/UI/WebScreenView.vue";
import { RouterView } from "vue-router";
import {ref,computed} from "vue"

const screenWidth = ref<number>(window.innerWidth)
const isMobile = computed(():boolean =>{
  return screenWidth.value<600
})
</script>

<template>
  <template v-if="isMobile">
    <RouterView />
  </template>
  <template v-else>
    <WebScreenView />
  </template>
</template>
<style scoped></style>


