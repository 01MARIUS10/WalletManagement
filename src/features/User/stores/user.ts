import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User } from '../types'
import { userMock } from '../data'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>(userMock)
  const balanceFormat = computed(() => {
    const { balanceWallet, balanceUnit } = user.value.account
    return `${balanceWallet} ${balanceUnit}`
  })
  return {
    user,
    balanceFormat
  }
})