export interface Transaction {
  id: number
  label: string
  amount: number
  category: string
  iconCategory: string
  date: Date
  image: string
}

export interface RawTransaction {
  id: number;
  label: string;
  amount: number;
  categorie_id: number;
  category: {
    id: number;
    nom: string;
    icon: string;
    user_id: string;
    created_at: string;
  };
  date: string;
  image: string;
  created_at: string;
  updated_at: string;
  user_id: string;
}