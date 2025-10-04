import { supabase } from '@/services/supabase';
import type { PostgrestError } from '@supabase/supabase-js';
import type { Transaction } from '../types';
import type { RawTransaction } from "../types";
import { mapToTransactionDTO } from '../DTO/transaction';
import type { FetchTransactionsOptions } from './transactionQueryBuilder';
import { TransactionOptionsBuilder } from './transactionQueryBuilder';

/**
 * Factory function pour créer un builder
 */
export const TransactionOptions = () => new TransactionOptionsBuilder();

/**
 * Récupère des transactions depuis Supabase.
 */
export async function fetchTransactions(options?: FetchTransactionsOptions): Promise<{ data: Transaction[]; error: PostgrestError | null }> {
  const {
    userId,
    categoryId,
    from,
    to,
    limit = 100,
    offset = 0,
    order = 'desc',
    orderBy = 'created_at',
  } = options ?? {};
  // Joindre la table categories et retourner l'objet category imbriqué
  const selectFields = '*, category:categories(*)';

  const query = supabase.from('transactions').select(selectFields);

  // Appliquer les mêmes filtres que précédemment
  if (userId) query.eq('user_id', userId);
  if (categoryId !== undefined && categoryId !== null) query.eq('category_id', categoryId);
  if (from) query.gte('date', from);
  if (to) query.lte('date', to);

  const start = offset;
  const end = offset + Math.max(0, limit - 1);

  const finalQuery = query.order(orderBy, { ascending: order === 'asc' }).range(start, end);

  const { data, error } = await finalQuery;
  if (error) {
    console.error('fetchTransactions error', error);
    return { data: [], error };
  }

  // Mappez les données brutes aux DTO Transaction
  //    
  const dataTransactionAPI = data as RawTransaction[] | [];
  const dataTransaction = dataTransactionAPI.map(t => mapToTransactionDTO(t));

  console.log('fetchTransactions__', { options, data, dataTransaction });
  return { data: dataTransaction, error };
}