<script
  lang="ts"
  setup
>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();


function isActive(tabTo: string) {
  return route.path === tabTo;
}
function activeClass(tabTo: string) {
  return isActive(tabTo) ? 'text-gray-100' : 'text-gray-400';
}
function navigate(to: string) {
  if (route.path !== to) {
    router.push(to);
  }
}
</script>

<template>
  <div>
    <nav class="fixed left-0 right-0 bottom-0 bg-indigo-700 rounded-xl m-4 border-t flex justify-around py-3">
      <button
        type="button"
        @click="navigate('/')"
        :class="['flex flex-col items-center', activeClass('/')]"
      >
        <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
        </svg>
        <span class="text-xs">Accueil</span>
      </button>
      <button
        type="button"
        @click="navigate('/transactions')"
        :class="['flex flex-col items-center', activeClass('/transactions')]"
      >
        <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        ></path>
        </svg>
        <span class="text-xs">Transactions</span>
      </button>
      <button
        type="button"
        @click="navigate('/categories')"
        :class="['flex flex-col items-center', activeClass('/categories')]"
      >
        <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
        ></path>
        </svg>
        <span class="text-xs">Catégories</span>
      </button>
      <button
        type="button"
        @click="navigate('/profil')"
        :class="['flex flex-col items-center', activeClass('/profil')]"
      >
        <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        ></path>
        </svg>
        <span class="text-xs">Profil</span>
      </button>
    </nav>
    <div class="h-24"><!-- Espace pour le BottomTab --></div>
  </div>
</template>
