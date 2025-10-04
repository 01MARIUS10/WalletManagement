import type { User } from '../types';
import { UserRole } from '../types';

export const userMock: User =
{
  id: '1',
  name: 'Marius Tsiorimbola',
  email: 'mariustsiorimbola@gmail.com',
  role: UserRole.ADMIN,
  avatarUrl: "https://i.pinimg.com/474x/32/e4/61/32e46132a367eb48bb0c9e5d5b659c88.jpg",
  createdAt: '2025-09-01T10:00:00Z',
  managerId: null,
  account: { 
    balanceWallet: 1500 ,
    balanceUnit: "MGA" 
  },
  settings: {
    defaultCurrency: 'EUR',
    locale: 'fr-FR',
    weeklyBudgetLimit: 500,
    notifications: {
      email: true,
      push: false,
    },
  },
};


export const userMock2: User =
{
  id: '2',
  name: 'Victor Visiteur',
  email: 'victor.visiteur@email.com',
  role: UserRole.VISITER,
  // avatarUrl: undefined,
  account: { 
    balanceWallet: 1500 ,
    balanceUnit: "MGA" 
  },createdAt: '2025-09-02T11:00:00Z',
  managerId: '1',
  settings: {
    defaultCurrency: 'EUR',
    locale: 'fr-FR',
    notifications: {
      email: false,
      push: true,
    },
  },
};