import { fetchCategories, CategoryOptions } from './categorieQBUse';
import type { CategorieStat } from '../types';
import type { PostgrestError } from '@supabase/supabase-js';

/**
 * Récupère les catégories (avec totaux) pour un utilisateur
 */
export async function fetchUserCategories(
  userId: string = '1',
  limit = 50
): Promise<{ data: CategorieStat[]; error: PostgrestError | null }> {
  const options = CategoryOptions()
    .default()
    .userId(userId)
    .limit(limit)
    .includeTotals(true)
    .build();

  return fetchCategories(options);
}

/**
 * Récupère les catégories récentes (triées par created_at)
 */
export async function fetchRecentCategories(
  limit = 20
): Promise<{ data: CategorieStat[]; error: PostgrestError | null }> {
  const options = CategoryOptions()
    .default()
    .limit(limit)
    .orderBy('created_at')
    .order('desc')
    .includeTotals(true)
    .build();

  return fetchCategories(options);
}

/**
 * Récupère les catégories avec totaux sur une période donnée
 */
export async function fetchCategoriesByDateRange(
  from: string,
  to: string,
  userId?: string
): Promise<{ data: CategorieStat[]; error: PostgrestError | null }> {
  const builder = CategoryOptions()
    .default()
    .from(from)
    .to(to)
    .includeTotals(true);

  if (userId) builder.userId(userId);

  return fetchCategories(builder.build());
}