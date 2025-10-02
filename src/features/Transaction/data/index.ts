import type { Transaction } from "../types"
// Mock data : tableau de transactions
export const mockTransactions: Transaction[] = [
  // Nourriture
  { id: 1, label: '🍔 Repas midi', amount: -12, category: 'Nourriture', icon: '🍔', date: '2025-09-01', image: '' },
  { id: 2, label: '🛒 Courses semaine', amount: -45, category: 'Nourriture', icon: '🍔', date: '2025-09-03', image: '' },
  { id: 3, label: '🍕 Pizza', amount: -18, category: 'Nourriture', icon: '🍔', date: '2025-09-05', image: '' },
  { id: 4, label: '🥗 Salade', amount: -9, category: 'Nourriture', icon: '🍔', date: '2025-09-07', image: '' },
  { id: 5, label: '🍣 Sushi', amount: -22, category: 'Nourriture', icon: '🍔', date: '2025-09-09', image: '' },
  { id: 6, label: '🍔 Fast-food', amount: -15, category: 'Nourriture', icon: '🍔', date: '2025-09-11', image: '' },

  // Loisirs
  { id: 7, label: '🎮 Jeu vidéo', amount: -30, category: 'Loisirs', icon: '🎮', date: '2025-09-02', image: '' },
  { id: 8, label: '🎬 Cinéma', amount: -14, category: 'Loisirs', icon: '🎮', date: '2025-09-04', image: '' },
  { id: 9, label: '🎳 Bowling', amount: -20, category: 'Loisirs', icon: '🎮', date: '2025-09-06', image: '' },
  { id: 10, label: '🎤 Concert', amount: -35, category: 'Loisirs', icon: '🎮', date: '2025-09-08', image: '' },
  { id: 11, label: '🎲 Escape Game', amount: -25, category: 'Loisirs', icon: '🎮', date: '2025-09-10', image: '' },
  { id: 12, label: '🎨 Musée', amount: -12, category: 'Loisirs', icon: '🎮', date: '2025-09-12', image: '' },

  // Transport
  { id: 13, label: '🚗 Essence', amount: -50, category: 'Transport', icon: '🚗', date: '2025-09-01', image: '' },
  { id: 14, label: '🚌 Bus', amount: -3, category: 'Transport', icon: '🚗', date: '2025-09-03', image: '' },
  { id: 15, label: '🚆 Train', amount: -25, category: 'Transport', icon: '🚗', date: '2025-09-05', image: '' },
  { id: 16, label: '🚕 Taxi', amount: -18, category: 'Transport', icon: '🚗', date: '2025-09-07', image: '' },
  { id: 17, label: '🚲 Vélo', amount: -7, category: 'Transport', icon: '🚗', date: '2025-09-09', image: '' },
  { id: 18, label: '🚗 Parking', amount: -6, category: 'Transport', icon: '🚗', date: '2025-09-11', image: '' },

  // Santé
  { id: 19, label: '💊 Pharmacie', amount: -15, category: 'Santé', icon: '💊', date: '2025-09-02', image: '' },
  { id: 20, label: '🦷 Dentiste', amount: -60, category: 'Santé', icon: '💊', date: '2025-09-04', image: '' },
  { id: 21, label: '👨‍⚕️ Médecin', amount: -30, category: 'Santé', icon: '💊', date: '2025-09-06', image: '' },
  { id: 22, label: '🧴 Parapharmacie', amount: -10, category: 'Santé', icon: '💊', date: '2025-09-08', image: '' },
  { id: 23, label: '🏥 Hôpital', amount: -100, category: 'Santé', icon: '💊', date: '2025-09-10', image: '' },
  { id: 24, label: '🩺 Analyse', amount: -25, category: 'Santé', icon: '💊', date: '2025-09-12', image: '' },

  // Logement
  { id: 25, label: '🏠 Loyer', amount: -500, category: 'Logement', icon: '🏠', date: '2025-09-01', image: '' },
  { id: 26, label: '💡 Électricité', amount: -60, category: 'Logement', icon: '🏠', date: '2025-09-05', image: '' },
  { id: 27, label: '💧 Eau', amount: -30, category: 'Logement', icon: '🏠', date: '2025-09-09', image: '' },
  { id: 28, label: '📦 Assurance', amount: -40, category: 'Logement', icon: '🏠', date: '2025-09-11', image: '' },
  { id: 29, label: '🛠️ Réparations', amount: -80, category: 'Logement', icon: '🏠', date: '2025-09-13', image: '' },
  { id: 30, label: '🪑 Meubles', amount: -120, category: 'Logement', icon: '🏠', date: '2025-09-15', image: '' }
];
