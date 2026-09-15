/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPTEUR D'OCCURRENCES DE LETTRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui compte combien de fois la lettre "e" (minuscule ou majuscule) apparaît dans un long paragraphe.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day04/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
 let lettre = "Programming is the art of writing logical instructions for computers to solve complex problems and build modern digital solutions."
function x(lettre){
    let result= 0;
    for(let i=0; i < lettre.length; i++){
        if(lettre[i] === "e" ){
             result+= 1
        }
         
    }
    return result
        
    
   
    
}
console.log(x(lettre))