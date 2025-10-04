import { fetchTransactions, TransactionOptions } from "./transactionQueryBuilder";
import type { Transaction } from "../types";
import type { PostgrestError } from "@supabase/supabase-js";
/**
 * Récupère les transactions d'un utilisateur
 */
export async function fetchUserTransactions(userId: string, limit = 50): Promise<{
  data: Transaction[];
  error: PostgrestError | null;
}> {
  const options = TransactionOptions()
    .default()
    .userId(userId)
    .limit(limit)
    .build();

  return fetchTransactions(options);
}

/**
 * Récupère les transactions récentes
 */
export async function fetchRecentTransactions(limit = 20): Promise<{
  data: Transaction[];
  error: PostgrestError | null;
}> {
  const options = TransactionOptions()
    .default()
    .limit(limit)
    .orderBy('created_at')
    .order('desc')
    .build();

  return fetchTransactions(options);
}

/**
 * Récupère les transactions par période
 */
export async function fetchTransactionsByDateRange(from: string, to: string, userId?: string): Promise<{
  data: Transaction[];
  error: PostgrestError | null;
}> {
  const builder = TransactionOptions()
    .default()
    .from(from)
    .to(to);

  if (userId) builder.userId(userId);

  return fetchTransactions(builder.build());
}