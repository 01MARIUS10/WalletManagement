import type { Transaction } from "../types"
// Mock data : tableau de transactions
export const mockTransactions: Transaction[] = [
  // Dépenses
  { id: 1, label: '🍔 Repas midi', amount: -12, category: 'Nourriture', iconCategory: '🍔', date: '2025-09-01', image: '' },
  { id: 2, label: '🛒 Courses semaine', amount: -45, category: 'Nourriture', iconCategory: '🍔', date: '2025-09-03', image: '' },
  { id: 3, label: '🍕 Pizza', amount: -18, category: 'Nourriture', iconCategory: '🍔', date: '2025-09-05', image: '' },
  { id: 4, label: '🥗 Salade', amount: -9, category: 'Nourriture', iconCategory: '🍔', date: '2025-09-07', image: '' },
  { id: 5, label: '🍣 Sushi', amount: -22, category: 'Nourriture', iconCategory: '🍔', date: '2025-09-09', image: '' },
  { id: 6, label: '🍔 Fast-food', amount: -15, category: 'Nourriture', iconCategory: '🍔', date: '2025-09-11', image: '' },

  { id: 7, label: '🎮 Jeu vidéo', amount: -30, category: 'Loisirs', iconCategory: '🎮', date: '2025-09-02', image: '' },
  { id: 8, label: '🎬 Cinéma', amount: -14, category: 'Loisirs', iconCategory: '🎮', date: '2025-09-04', image: '' },
  { id: 9, label: '🎳 Bowling', amount: -20, category: 'Loisirs', iconCategory: '🎮', date: '2025-09-06', image: '' },
  { id: 10, label: '🎤 Concert', amount: -35, category: 'Loisirs', iconCategory: '🎮', date: '2025-09-08', image: '' },
  { id: 11, label: '🎲 Escape Game', amount: -25, category: 'Loisirs', iconCategory: '🎮', date: '2025-09-10', image: '' },
  { id: 12, label: '🎨 Musée', amount: -12, category: 'Loisirs', iconCategory: '🎮', date: '2025-09-12', image: '' },

  { id: 13, label: '🚗 Essence', amount: -50, category: 'Transport', iconCategory: '🚗', date: '2025-09-01', image: '' },
  { id: 14, label: '🚌 Bus', amount: -3, category: 'Transport', iconCategory: '🚗', date: '2025-09-03', image: '' },
  { id: 15, label: '🚆 Train', amount: -25, category: 'Transport', iconCategory: '🚗', date: '2025-09-05', image: '' },
  { id: 16, label: '🚕 Taxi', amount: -18, category: 'Transport', iconCategory: '🚗', date: '2025-09-07', image: '' },
  { id: 17, label: '🚲 Vélo', amount: -7, category: 'Transport', iconCategory: '🚗', date: '2025-09-09', image: '' },
  { id: 18, label: '🚗 Parking', amount: -6, category: 'Transport', iconCategory: '🚗', date: '2025-09-11', image: '' },

  { id: 19, label: '💊 Pharmacie', amount: -15, category: 'Santé', iconCategory: '💊', date: '2025-09-02', image: '' },
  { id: 20, label: '🦷 Dentiste', amount: -60, category: 'Santé', iconCategory: '💊', date: '2025-09-04', image: '' },
  { id: 21, label: '👨‍⚕️ Médecin', amount: -30, category: 'Santé', iconCategory: '💊', date: '2025-09-06', image: '' },
  { id: 22, label: '🧴 Parapharmacie', amount: -10, category: 'Santé', iconCategory: '💊', date: '2025-09-08', image: '' },
  { id: 23, label: '🏥 Hôpital', amount: -100, category: 'Santé', iconCategory: '💊', date: '2025-09-10', image: '' },
  { id: 24, label: '🩺 Analyse', amount: -25, category: 'Santé', iconCategory: '💊', date: '2025-09-12', image: '' },

  { id: 25, label: '🏠 Loyer', amount: -500, category: 'Logement', iconCategory: '🏠', date: '2025-09-01', image: '' },
  { id: 26, label: '💡 Électricité', amount: -60, category: 'Logement', iconCategory: '🏠', date: '2025-09-05', image: '' },
  { id: 27, label: '💧 Eau', amount: -30, category: 'Logement', iconCategory: '🏠', date: '2025-09-09', image: '' },
  { id: 28, label: '📦 Assurance', amount: -40, category: 'Logement', iconCategory: '🏠', date: '2025-09-11', image: '' },
  { id: 29, label: '🛠️ Réparations', amount: -80, category: 'Logement', iconCategory: '🏠', date: '2025-09-13', image: '' },
  { id: 30, label: '🪑 Meubles', amount: -120, category: 'Logement', iconCategory: '🏠', date: '2025-09-15', image: '' },

  // Revenus (20 transactions positives)
  { id: 31, label: '💰 Salaire', amount: 200, category: 'Revenus', iconCategory: '💼', date: '2025-09-01', image: '' },
  { id: 32, label: '💸 Remboursement ami', amount: 50, category: 'Revenus', iconCategory: '💼', date: '2025-09-03', image: '' },
  { id: 33, label: '🎁 Cadeau', amount: 100, category: 'Revenus', iconCategory: '🎁', date: '2025-09-04', image: '' },
  { id: 34, label: '🏆 Prime', amount: 300, category: 'Revenus', iconCategory: '🏆', date: '2025-09-05', image: '' },
  { id: 35, label: '💳 Cashback', amount: 20, category: 'Revenus', iconCategory: '💳', date: '2025-09-06', image: '' },
  { id: 36, label: '🛒 Vente Vinted', amount: 40, category: 'Revenus', iconCategory: '🛒', date: '2025-09-07', image: '' },
  { id: 37, label: '💼 Mission freelance', amount: 500, category: 'Revenus', iconCategory: '💼', date: '2025-09-08', image: '' },
  { id: 38, label: '🏦 Intérêts livret', amount: 15, category: 'Revenus', iconCategory: '🏦', date: '2025-09-09', image: '' },
  { id: 39, label: '🎓 Bourse', amount: 200, category: 'Revenus', iconCategory: '🎓', date: '2025-09-10', image: '' },
  { id: 40, label: '🧾 Remboursement santé', amount: 60, category: 'Revenus', iconCategory: '💊', date: '2025-09-11', image: '' },
  { id: 41, label: '🧑‍🏫 Cours particulier', amount: 80, category: 'Revenus', iconCategory: '🧑‍🏫', date: '2025-09-12', image: '' },
  { id: 42, label: '🚗 Vente vélo', amount: 120, category: 'Revenus', iconCategory: '🚗', date: '2025-09-13', image: '' },
  { id: 43, label: '🏠 Location saisonnière', amount: 350, category: 'Revenus', iconCategory: '🏠', date: '2025-09-14', image: '' },
  { id: 44, label: '💻 Vente ordinateur', amount: 400, category: 'Revenus', iconCategory: '💻', date: '2025-09-15', image: '' },
  { id: 45, label: '📚 Vente livres', amount: 30, category: 'Revenus', iconCategory: '📚', date: '2025-09-16', image: '' },
  { id: 46, label: '🖼️ Vente tableau', amount: 150, category: 'Revenus', iconCategory: '🖼️', date: '2025-09-17', image: '' },
  { id: 47, label: '🎸 Concert bénévole', amount: 70, category: 'Revenus', iconCategory: '🎸', date: '2025-09-18', image: '' },
  { id: 48, label: '🧸 Vente jouets', amount: 25, category: 'Revenus', iconCategory: '🧸', date: '2025-09-19', image: '' },
  { id: 49, label: '🛏️ Location chambre', amount: 200, category: 'Revenus', iconCategory: '🏠', date: '2025-09-20', image: '' },
  { id: 50, label: '🧾 Remboursement impôt', amount: 180, category: 'Revenus', iconCategory: '💶', date: '2025-09-21', image: '' }
];
