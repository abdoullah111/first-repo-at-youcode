/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPARAISON D'OBJETS (DEEP EQUAL CONCEPT)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction sontIdentiques(obj1, obj2) qui vérifie si deux objets littéraux 
 * (sans objets imbriqués) ont exactement les mêmes clés et les mêmes valeurs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day06/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let obj1 = {nom: "yassin"}
let obj2= {nom: "yssin"}


function sontIdentiques(obj1, obj2){
    let entries1 = Object.entries(obj1)
    let entries2 = Object.entries(obj2)
    if(entries1.length !== entries2.length){
        return false;
    }
   
    for(let i= 0; i<entries1.length; i++){
        if(entries1[i][0] !== entries2[i][1] && entries1[i][1] !== entries2[i][1]){
            return false;
        }
    }

    return true;
        
    
}
console.log(sontIdentiques(obj1, obj2))