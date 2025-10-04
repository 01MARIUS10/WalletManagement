-- Insérer les catégories uniques dans la table "categories" avec user_id = '1'
INSERT INTO "categories" (nom, icon, description, user_id)
SELECT DISTINCT
  category AS nom,
  iconCategory AS icon,
  'Description pour ' || category AS description,
  '1' AS user_id
FROM (
  VALUES
    ('Nourriture', '🍔'),
    ('Loisirs', '🎮'),
    ('Transport', '🚗'),
    ('Santé', '💊'),
    ('Logement', '🏠'),
    ('Revenus', '💼')
) AS categories(category, iconCategory)
ON CONFLICT (nom) DO NOTHING;

-- Insérer les transactions dans la table "transactions" avec user_id = '1' et lien vers categories
INSERT INTO "transactions" (label, amount, categorie_id, date, image, user_id)
SELECT
  t.label,
  t.amount,
  c.id AS categorie_id,
  t.date::DATE,
  t.image,
  '1' AS user_id
FROM (
  VALUES
    ('🍔 Repas midi', -12, 'Nourriture', '🍔', '2025-09-01', ''),
    ('🛒 Courses semaine', -45, 'Nourriture', '🍔', '2025-09-03', ''),
    ('🍕 Pizza', -18, 'Nourriture', '🍔', '2025-09-05', ''),
    ('🥗 Salade', -9, 'Nourriture', '🍔', '2025-09-07', ''),
    ('🍣 Sushi', -22, 'Nourriture', '🍔', '2025-09-09', ''),
    ('🍔 Fast-food', -15, 'Nourriture', '🍔', '2025-09-11', ''),
    ('🎮 Jeu vidéo', -30, 'Loisirs', '🎮', '2025-09-02', ''),
    ('🎬 Cinéma', -14, 'Loisirs', '🎮', '2025-09-04', ''),
    ('🎳 Bowling', -20, 'Loisirs', '🎮', '2025-09-06', ''),
    ('🎤 Concert', -35, 'Loisirs', '🎮', '2025-09-08', ''),
    ('🎲 Escape Game', -25, 'Loisirs', '🎮', '2025-09-10', ''),
    ('🎨 Musée', -12, 'Loisirs', '🎮', '2025-09-12', ''),
    ('🚗 Essence', -50, 'Transport', '🚗', '2025-09-01', ''),
    ('🚌 Bus', -3, 'Transport', '🚗', '2025-09-03', ''),
    ('🚆 Train', -25, 'Transport', '🚗', '2025-09-05', ''),
    ('🚕 Taxi', -18, 'Transport', '🚗', '2025-09-07', ''),
    ('🚲 Vélo', -7, 'Transport', '🚗', '2025-09-09', ''),
    ('🚗 Parking', -6, 'Transport', '🚗', '2025-09-11', ''),
    ('💊 Pharmacie', -15, 'Santé', '💊', '2025-09-02', ''),
    ('🦷 Dentiste', -60, 'Santé', '💊', '2025-09-04', ''),
    ('👨‍⚕️ Médecin', -30, 'Santé', '💊', '2025-09-06', ''),
    ('🧴 Parapharmacie', -10, 'Santé', '💊', '2025-09-08', ''),
    ('🏥 Hôpital', -100, 'Santé', '💊', '2025-09-10', ''),
    ('🩺 Analyse', -25, 'Santé', '💊', '2025-09-12', ''),
    ('🏠 Loyer', -500, 'Logement', '🏠', '2025-09-01', ''),
    ('💡 Électricité', -60, 'Logement', '🏠', '2025-09-05', ''),
    ('💧 Eau', -30, 'Logement', '🏠', '2025-09-09', ''),
    ('📦 Assurance', -40, 'Logement', '🏠', '2025-09-11', ''),
    ('🛠️ Réparations', -80, 'Logement', '🏠', '2025-09-13', ''),
    ('🪑 Meubles', -120, 'Logement', '🏠', '2025-09-15', ''),
    ('💰 Salaire', 200, 'Revenus', '💼', '2025-09-01', ''),
    ('💸 Remboursement ami', 50, 'Revenus', '💼', '2025-09-03', ''),
    ('🎁 Cadeau', 100, 'Revenus', '🎁', '2025-09-04', ''),
    ('🏆 Prime', 300, 'Revenus', '🏆', '2025-09-05', ''),
    ('💳 Cashback', 20, 'Revenus', '💳', '2025-09-06', ''),
    ('🛒 Vente Vinted', 40, 'Revenus', '🛒', '2025-09-07', ''),
    ('💼 Mission freelance', 500, 'Revenus', '💼', '2025-09-08', ''),
    ('🏦 Intérêts livret', 15, 'Revenus', '🏦', '2025-09-09', ''),
    ('🎓 Bourse', 200, 'Revenus', '🎓', '2025-09-10', ''),
    ('🧾 Remboursement santé', 60, 'Revenus', '💊', '2025-09-11', ''),
    ('🧑‍🏫 Cours particulier', 80, 'Revenus', '🧑‍🏫', '2025-09-12', ''),
    ('🚗 Vente vélo', 120, 'Revenus', '🚗', '2025-09-13', ''),
    ('🏠 Location saisonnière', 350, 'Revenus', '🏠', '2025-09-14', ''),
    ('💻 Vente ordinateur', 400, 'Revenus', '💻', '2025-09-15', ''),
    ('📚 Vente livres', 30, 'Revenus', '📚', '2025-09-16', ''),
    ('🖼️ Vente tableau', 150, 'Revenus', '🖼️', '2025-09-17', ''),
    ('🎸 Concert bénévole', 70, 'Revenus', '🎸', '2025-09-18', ''),
    ('🧸 Vente jouets', 25, 'Revenus', '🧸', '2025-09-19', ''),
    ('🛏️ Location chambre', 200, 'Revenus', '🏠', '2025-09-20', ''),
    ('🧾 Remboursement impôt', 180, 'Revenus', '💶', '2025-09-21', '')
) AS t(label, amount, category, iconCategory, date, image)
JOIN "categories" c ON c.nom = t.category;