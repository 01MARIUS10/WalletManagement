
export type UserId = string;

export enum UserRole {
  ADMIN = 'admin',
  VISITER = 'VISITER',
}

/**
 * Per-user preferences relevant to a spend management app
 */
export interface UserSettings {
  defaultCurrency: string; // ISO 4217 code, e.g. "EUR"
  locale: string; // BCP 47, e.g. "fr-FR"
  weeklyBudgetLimit?: number; // optional budget limit in smallest currency unit or main unit depending on app conventions
  notifications?: {
    email?: boolean;
    push?: boolean;
  };
}
export interface Account {
  balanceWallet: number; // ISO 4217 code, e.g. "EUR"
  balanceUnit: string; // BCP 47, e.g. "fr-FR"
}

/**
 * Core User type used throughout the SpendManagement app
 */
export interface User {
  id: UserId;
  name: string;
  email: string;
  account: Account;
  role: UserRole;
  avatarUrl?: string | null;
  createdAt: string; // ISO date string

  // Domain-specific fields
  managerId?: UserId | null; // for team relationships

  settings?: UserSettings;
}