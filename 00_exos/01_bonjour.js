// let prenom = prompt("Entrez votre prénom:");
// let nom = prompt("Entrez votre nom:");

// alert('Bonjour, ' + prenom + ' ' + nom+ ' !');

let questionPrenom = 'Quel est votre prénom ?';
let questionNom = 'Quel est votre nom ?';

let prenom = prompt(questionPrenom);
let nom = prompt(questionNom);

// console.clear permet de nettoyer la console
console.clear();
console.log(prenom, nom);

alert('Bonjour, ' + prenom + ' ' + nom+ ' !');