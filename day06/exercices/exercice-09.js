/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day06/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

let candidat1 = { nom: "Ahmed", score: 75 };
let candidat2 = { nom: "yassin", score: 50 };
let candidat3 = {nom: "rachid", score: 9}

let candidats = [candidat1, candidat2, candidat3];
let result = []
function filtrerCandidats(liste) {
    for(let i = 0; i<liste.length; i++){
        if(liste[i].score >= 10){
            result.push(liste[i])
        }

    }
    return result;
}

console.log(filtrerCandidats(candidats));