// Page objet littéral

// victor est un nouvel objet 
let victor = {
    //nom, age, et email sont des propriétés de l'objet
    nom: ['Victor', 'Marie', 'Hugo'],
    age: 2,
    email: 'totor@hugo.fr',

    //bonjour
    bonjour: function () {
        alert('Je suis ' + this.nom[0] + ' ' + this.nom[2] + ' et j\'ai ' + this.age + ' ans');
    }
}

// console.info(typeof victor, victor);
victor.bonjour();

//On accède aux propriétés qui contiennent des valeurs
document.getElementById('p1').innerHTML = 'Nom : ' + victor.nom;
document.getElementById('p2').innerHTML = 'Age : ' + victor.age + ' ans';
document.getElementById('p2').innerHTML = 'Email : ' + victor.email;

victor.age = 80;
console.info(typeof victor, victor);

document.getElementById('p4').innerHTML = 'Nouvel âge: ' + victor.age + ' ans';

//on rajoute deux nouvelles propriétés et leur valeurs associées
victor.metier = 'écrivain, dramaturge, et poête';
console.info(typeof victor, victor);

victor.metier = 'écrivain éxilé, dramaturge, et poête';
console.info(victor.metier);

victor.adresse = "en son avenue, à Paris";
console.info(victor.adresse);

// et on crée une nouvelle méthode
victor.bonjour2 = function () {
    alert('Bonjour j\'ai maintenant ' + this.age + ' ans, je suis ' + this.metier + ' et je suis célèbre dans le monde entier.');
}

victor.bonjour2();

document.getElementById('p5').innerHTML='Bonjour je suis '+ victor.nom[0]+ ' '+victor.nom[2];

