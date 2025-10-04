import { supabase } from '../lib/supabase'
import { userMock, userMock2 } from '../features/User/data'
import { mockTransactions } from '../features/Transaction/data'

export async function seedUsers() {
  const users = [userMock, userMock2].map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    avatar_url: user.avatarUrl,
    created_at: user.createdAt,
    manager_id: user.managerId,
    balance_wallet: user.account.balanceWallet,
    balance_unit: user.account.balanceUnit,
    default_currency: user.settings?.defaultCurrency,
    locale: user.settings?.locale,
    weekly_budget_limit: user.settings?.weeklyBudgetLimit,
    notifications_email: user.settings?.notifications?.email,
    notifications_push: user.settings?.notifications?.push
  }))

  const { data, error } = await supabase
    .from('users')
    .insert(users)
  
  if (error) console.error('Erreur users:', error)
  else console.log('Users insérés:', data)
}

export async function seedTransactions() {
  const transactions = mockTransactions.map(t => ({
    id: t.id,
    label: t.label,
    amount: t.amount,
    category: t.category,
    icon_category: t.iconCategory,
    date: t.date,
    image: t.image,
    user_id: '1' // Assigne toutes les transactions à l'utilisateur 1
  }))

  const { data, error } = await supabase
    .from('transactions')
    .insert(transactions)
  
  if (error) console.error('Erreur transactions:', error)
  else console.log('Transactions insérées:', data)
}

// Fonction principale
export async function seedAll() {
  await seedUsers()
  await seedTransactions()
}