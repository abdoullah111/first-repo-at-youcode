# 🔎 Jour 01 — Recherche

[← Tableau de bord](./README.md) · [Exercices guidés →](./02-guides.md)

> [!NOTE]
> Le but n'est pas de copier une définition. Prépare une explication simple et un exemple personnel.

## Mode d'emploi

1. Recherche la notion.
2. Reformule la réponse avec tes propres mots.
3. Ajoute un petit exemple lorsque c'est possible.
4. Coche la question une fois que tu peux l'expliquer sans lire.

## Questions


### Question 01

>" Quelle est la différence fondamentale entre `let`, `const` et `var` en JavaScript ?
"
- [ ] J'ai recherché et compris la notion.

**Ma réponse :*
var : Vous pouvez le redéclarer avec le même nom (var a = 1; var a = 2;) et vous pouvez modifier sa valeur (réassignation).

let : Vous pouvez modifier sa valeur (let b = 1; b = 2;), mais vous ne pouvez pas le redéclarer dans le même scope (portée).

const : Vous ne pouvez pas modifier sa valeur  et vous ne pouvez pas le redéclarer.

*

> À compléter avec mes propres mots.

--
### Question 02

> Quels sont les 7 types primitifs de données en JavaScript ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :*
String
Boolean
BigInt
Number
Null
Undefined
Object
*

> À compléter avec mes propres mots.

---

### Question 03

> Que signifie `typeof null` en JavaScript, et pourquoi est-ce considéré comme une erreur historique ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse : 
Le tag 000 a été défini pour représenter les objets. En raison de la présence de ces zéros, le moteur a considéré que null portait le tag 000 propre aux objets, et par conséquent, la fonction typeof null a retourné la valeur "object". 36
**


> À compléter avec mes propres mots.

---

### Question 04

> Quelle est la différence entre l'opérateur d'égalité souple `==` et l'opérateur d'égalité stricte `===` ? Lequel faut-il privilégier ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :*
== : Il compare uniquement la valeur. Si les variables sont de types différents (par exemple un nombre et une chaîne de caractères), JavaScript effectue automatiquement une conversion de type (Type Coercion) pour pouvoir les comparer.

=== : Il compare à la fois la valeur ET le type. Si le type est différent, il retourne directement false sans effectuer aucune conversion.
*

> À compléter avec mes propres mots.

---

### Question 05

> Que se passe-t-il si j'essaie de changer la valeur d'une variable déclarée avec `const` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :*
Si vous essayez de modifier la valeur d'une variable déclarée avec const, JavaScript lève une erreur de type TypeError.
*

> À compléter avec mes propres mots.

---

### Question 06

> Comment JavaScript gère-t-il l'addition entre un nombre et une chaîne de caractères (ex: `5 + "5"`) ? Comment appelle-t-on ce phénomène ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :*
Lorsque vous faites 5 + "5", JavaScript convertit le nombre en texte et les fusionne pour donner "55", un phénomène appelé Type Coercion.
*

> À compléter avec mes propres mots.

---

### Question 07

> À quoi sert l'opérateur modulo `%` et donnez un cas d'usage classique.

- [ ] J'ai recherché et compris la notion.

**Ma réponse :*
Le rôle de l'opérateur modulo % est de retourner le reste de la division entière entre deux nombres. Un cas d'utilisation classique est la vérification de la parité d'un nombre (savoir s'il est pair ou impair avec n % 2 === 0.
*

> À compléter avec mes propres mots.

---

### Question 08

> Quelle est la différence entre `&&` (ET logique) et `||` (OU logique) dans une condition ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :*
|| : Il suffit qu'une seule condition soit vraie (true) parmi les conditions pour qu'il retourne true. Il ne retourne false que dans un seul cas : si toutes les conditions sont fausses (false).

&& : Il exige que toutes les conditions soient vraies (true) en même temps pour retourner true. Si une seule condition est fausse (false), le résultat est annulé et devient false.
*

> À compléter avec mes propres mots.

---

### Question 09

> Est-il possible d'utiliser une condition `switch` à la place d'une série de `if / else if` ? Dans quel cas est-ce préférable ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :*
L'instruction switch remplace avantageusement une chaîne de if / else if lorsqu'on doit comparer une seule variable à au moins trois ou quatre valeurs fixes distinctes, améliorant ainsi la lisibilité du code.
*

> À compléter avec mes propres mots.

---

### Question 10

> Qu'est-ce qu'une valeur "falsy" en JavaScript ? Citez 3 exemples.

- [ ] J'ai recherché et compris la notion.

**Ma réponse :*
Une valeur falsy est définie comme toute valeur qui est automatiquement convertie en false lorsqu'elle est évaluée dans une condition logique (comme un if).
*

> À compléter avec mes propres mots.


## ✅ Validation de la recherche

- [ ] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ ] J'ai noté les notions que je dois encore clarifier.
