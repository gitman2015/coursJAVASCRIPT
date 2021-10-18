let auteur = 'Victor Hugo';


let utilisateur = { //ici on a une variable objet
    //nom, email, age et adresse sont des propriétés de l'objet utilisateur
    //nom: ici nous avons des propriété qui sont dans unn 
    nom: ['Victor', 'Marie', 'Hugo'], //nom indice 0, 1, 2
    age: 2,
    email: 'totor@hugo.fr',
    adresse: 'Besançon',

    // Une méthode qui est un peu
    bonjour: function () {
        alert('Bonjour j\ai ' + this.age + ' ans et mon nom est ' + this.nom[0] + ' ' + this.nom[1] + ' ' + this.nom[2]);
    }
};

let utilisateur2 = {

    "nom": "victor",
    "age": 2,
    "email": 'totor@hugo.fr',
    "adresse": "Besançon",
}

console.info(typeof utilisateur, utilisateur);
utilisateur.bonjour();

console.log(utilisateur2);