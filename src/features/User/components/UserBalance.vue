<script
  lang="ts"
  setup
>
import { computed } from 'vue'
import type { Account } from '../types';
const props = withDefaults(
  defineProps<{
    balance:Account
  }>(),

  { balance: { balanceWallet: 0, balanceUnit: 'MGA' } }
)


const formattedBalance = computed(() => {
  if (true) {
    const { balanceWallet = 0, balanceUnit } = props.balance
    if (balanceUnit && balanceUnit.length === 3) {
      try {
        return new Intl.NumberFormat(undefined, { style: 'currency', currency: balanceUnit }).format(balanceWallet)
      } catch {
        // fallthrough to fallback formatting
      }
    }
    return `${Number(balanceWallet).toLocaleString()} ${balanceUnit ?? ''}`.trim()
  }
})
</script>
<template>
  <div
    class="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-5 shadow"
  >
    <div class="flex justify-between items-center">
      <div>
        <p class="text-sm text-gray-600">Current Balance</p>
        <h3 class="text-3xl font-bold text-indigo-800">{{ formattedBalance }}</h3>
      </div>
      <button
        class="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-100"
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
            d="M12 4v16m8-8H4"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>