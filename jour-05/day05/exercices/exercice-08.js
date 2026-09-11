/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre,
 *  SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day05/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let tab = [12, 5, 55, 2];

function result (tableau){
    let max =tableau[0]
    let min =tableau[0]

    for (let i=0;i<tableau.length;i++){
        if (max < tableau[i]){
             max=tableau[i]
        }
        if (min > tableau [i]){
            min=tableau[i]
         
        }


           
        
        
} 
return {min:min,max:max}
}
console.log(result(tab)
)
