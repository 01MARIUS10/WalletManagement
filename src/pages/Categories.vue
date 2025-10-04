<script setup lang="ts">
import AppLayout from './Layout/AppLayout.vue';
import FloatingAdd from '@/components/Button/FloatingAdd.vue';
import HeaderApp from '@/widgets/HeaderApp.vue';
import CategorieList from '@/features/Categorie/components/CategorieList.vue';
</script>

<template>
  <AppLayout>
    <div class="bg-white shadow ">
      <HeaderApp />
    </div>
    <div class="min-h-[calc(100vh - calc(96px + 60px)] p-4">
      <!-- Content -->
      <div class="flex-1 overflow-y-auto">
        <!-- Categories List -->
        <CategorieList />
      </div>
      <FloatingAdd @open="console.log('onOpen')" />
    </div>
  </AppLayout>
</template>
