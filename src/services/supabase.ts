import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { supabaseConf } from '../lib/supabase';
let supabaseClient: SupabaseClient | null = null;

/**
 * Retourne une instance singleton de SupabaseClient.
 * Utilise les variables d'environnement :
 * - NEXT_PUBLIC_SUPABASE_URL ou SUPABASE_URL
 * - NEXT_PUBLIC_SUPABASE_ANON_KEY ou SUPABASE_ANON_KEY
 *
 * Lance une erreur si les variables sont absentes.
 */
export function getSupabase(): SupabaseClient {
  if (supabaseClient) return supabaseClient;

  const SUPABASE_URL = supabaseConf.supabaseUrl;
  const SUPABASE_ANON_KEY = supabaseConf.supabaseKey;

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error(
      "Variables d'environnement manquantes : SUPABASE_URL et SUPABASE_ANON_KEY (ou NEXT_PUBLIC_...)"
    );
  }

  supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return supabaseClient;
}

// Export direct de l'instance pour faciliter l'import
export const supabase = getSupabase();

export default getSupabase;