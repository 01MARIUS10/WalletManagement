import type { Transaction } from "../types";
import type { RawTransaction } from "../types";

// Fonction de mapping
export function mapToTransactionDTO(raw: RawTransaction): Transaction {
  return {
    id: raw.id,
    label: raw.label,
    amount: raw.amount,
    category: raw.category.nom,
    iconCategory: raw.category.icon,
    date: new Date(raw.created_at),
    image: raw.image,
  };
}