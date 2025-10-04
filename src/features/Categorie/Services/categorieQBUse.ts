import { supabase } from '@/services/supabase';
import type { PostgrestError } from '@supabase/supabase-js';
import type { CategorieStat } from '../types';
import type { FetchCategoriesOptions } from './categorieQueryBuilder';
import { CategoryOptionsBuilder } from './categorieQueryBuilder';


/**
 * Factory function pour créer un builder
 */
export const CategoryOptions = () => new CategoryOptionsBuilder();

/**
 * Récupère les catégories. Si includeTotals=true, calcule amount (somme des dépenses absolues)
 * et percent (part de la dépense totale) côté serveur-client (via requêtes séparées).
 */
export async function fetchCategories(
  options?: FetchCategoriesOptions
): Promise<{ data: CategorieStat[]; error: PostgrestError | null }> {
  const {
    userId,
    from,
    to,
    includeTotals = true,
    limit = 100,
    offset = 0,
    order = 'asc',
    orderBy = 'nom',
  } = { ...(CategoryOptions().default().build()), ...options };

  // Récupère les catégories
  const { data: categoriesRaw, error: catError } = await supabase
  .from('categories')
  .select('*')
  .order(orderBy, { ascending: order === 'asc' })
  .range(offset, offset + Math.max(0, limit - 1));

  if (catError) return { data: [], error: catError };
  
  // Si on ne veut pas les totaux, on retourne les catégories mappées simplement
  if (!includeTotals) {
    const data: CategorieStat[] = (categoriesRaw ?? []).map((c: any) => ({
      name: c.nom,
      icon: c.icon ?? '',
      amount: Number(c.amount ?? 0),
      percent: Number(c.percent ?? 0),
      description: c.description ?? '',
    }));
    return { data, error: null };
  }
  
  // Récupérer les transactions pertinentes pour calculer les totaux
  let txQuery = supabase
  .from('transactions')
  .select('categorie_id, amount');
  
  if (userId) txQuery = txQuery.eq('user_id', userId);
  if (from) txQuery = txQuery.gte('date', from);
  if (to) txQuery = txQuery.lte('date', to);
  
  const { data: txData, error: txError } = await txQuery;
  if (txError) return { data: [], error: txError };
  
  console.log('FEtchcategorie', txData);
  // Calculer totaux par categorie (somme des |amount| pour amount < 0)
  const totalsMap: Record<number, number> = {};
  let globalTotal = 0;
  (txData ?? []).forEach((t: any) => {
    const amt = Number(t.amount ?? 0);
    if (amt < 0) {
      const cid = Number(t.categorie_id);
      const absAmt = Math.abs(amt);
      totalsMap[cid] = (totalsMap[cid] ?? 0) + absAmt;
      globalTotal += absAmt;
    }
  });

  // Mapper catégories en CategorieStat
  const data: CategorieStat[] = (categoriesRaw ?? []).map((c: any) => {
    const cid = Number(c.id);
    const amount = Number(totalsMap[cid] ?? 0);
    const percent = globalTotal > 0 ? Number(((amount / globalTotal) * 100).toFixed(2)) : 0;
    return {
      name: c.nom,
      icon: c.icon ?? '',
      amount,
      percent,
      description: c.description ?? '',
    };
  });

  // Trier par amount décroissant pour commodité (optionnel)
  data.sort((a, b) => b.amount - a.amount);

  return { data, error: null };
}