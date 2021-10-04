// JS pour la page types

//1 STRING
// let presentation = "Je m'apelle Michaël.";
let presentation = 'Je m\'appelle Michaêl';
console.log(typeof (presentation));

let age = 25;
let age2 = 56;

// 1 -récupérer dans le doc un élément dont l'id est XX
// 2 - Remplacer le contenu d'un élément identifié par son id
// 3 - Puis on concatène une string
document.getElementById('p1').innerHTML = 'Type de données pour la variable présentation : ' + typeof presentation;

document.getElementById('p2').innerHTML = 'Type de données pour la variable age : ' + typeof age;

document.getElementById('p3').innerHTML = 'Type de données pour la variable age2 : ' + typeof age2;

let monFilm1 ="Mon film préféré est \"20 000 lieux sous les mers\"";
console.log(monFilm1);

let monFilm2 = "Mon film préféré est \"20 000 lieux sous les mers\"";
console.log(monFilm2)