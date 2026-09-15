/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · CHALLENGE
 * GESTION DE PANIER E-COMMERCE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous codez la logique du panier d'achat d'une boutique en ligne.
 *
 * Consignes :
 * 1. Vous avez un tableau représentant les ID des articles dans le panier : panier = [101, 105, 101, 102].
 * 2. Créez une fonction ajouterAuPanier(id) qui ajoute l'article au tableau.
 * 3. Créez une fonction retirerDuPanier(id) qui retire Toutes les occurrences de cet ID du panier (ex: retirer 101).
 * 4. (Bonus) Créez une fonction afficherQuantites() qui compte et affiche le panier sous forme : Article 101 : 2 exemplaires, Article 105 : 1 exemplaire...
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day05/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.
// 1. Déclarer le panier comme variable d'état
let panier = [101, 105, 101, 102];

// 2. Fonction d'ajout d'un article
function ajouterAuPanier(panierActuel, id) {
    panierActuel.push(id);
    return panierActuel;
}
function retirerDuPanier(panierActuel, id) {
    return panierActuel.filter(item => item !== id);
}
function compterArticles(panierActuel) {
    let inventaire = {};
    for (let id of panierActuel) {
        inventaire[id] = (inventaire[id] || 0) + 1;
    }
    return inventaire;
}
function afficherPanier(panierActuel) {
    let quantites = compterArticles(panierActuel);
    console.log("=== État du Panier ===");
    for (let id in quantites) {
        console.log(`Article ${id} : ${quantites[id]} exemplaire(s)`);
    }
}

afficherPanier(panier);
panier = ajouterAuPanier(panier, 105)
panier = retirerDuPanier(panier, 101);
afficherPanier(panier);