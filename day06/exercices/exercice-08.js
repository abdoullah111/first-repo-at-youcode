/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day06/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let candidat1 = {
    nom : "Ahmed",
    score : 75
}
let candidat2 = {
    nom : "yassin",
    score : 50
}
function solution(candidat1, candidat2){
    if(candidat1.score > candidat2.score){
        return "le candidat qui ayant le milleur score est "+candidat1.nom
    }else{
        return "le candidat qui ayant le milleur score est"+candidat2.nom
    }
}
console.log(solution(candidat1, candidat2))
