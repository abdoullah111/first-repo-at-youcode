/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * LE CHIFFRE DE CÉSAR (CRYPTOG7RAPHIE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction chiffrerCesar(texte, decalage) qui décale chaque lettre de l'alphabet. Par exemple, avec un décalage de 1, "ABC" devient "BCD".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day04/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
function chiffrerCesar(texte, decalage){
    let result = "";
    for(let i = 0; i<= texte.length; i++){
        let num = texte.charCodeAt(i)// 65
        if(num >= 65 && num<= 90){
            let newNum = num - 65;
            let core = (newNum + decalage)%26;
            let final = core + 65
            result += String.fromCharCode(final)
        }else if(num>=97 && num <= 122 ){
            let number = num - 97;
            let core1 = (number + decalage)%26;
            let final1 = core1 + 97;
            result+= String.fromCharCode(final1)
        }

        
        

    }
    return result

}
console.log(chiffrerCesar("a", 3))