<script
  setup
  lang="ts"
>

import BottomTab from '@/widgets/BottomTab.vue'
import HeaderApp from '@/widgets/HeaderApp.vue';
</script>

<template>
  <div class="bg-gray-100 text-black font-sans">
    <!-- Main Container -->
    <div class="flex flex-col min-h-screen">
      <slot />
      <BottomTab />

    </div>
  </div>
</template>
