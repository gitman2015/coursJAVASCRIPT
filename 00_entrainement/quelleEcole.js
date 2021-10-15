function quelleEcole() {
    let age = prompt('Quel âge à votre enfant ?');

    if (age < 6) {
        var message= alert('age entré: '+age+' , votre enfant doit avoir plus de 6 ans our rentrer à l\'école');
        return message;
    } else if (age >= 6 && age <= 11) {
        var message =alert('votre enfant va en primaire');
        return message;
    } else if (age >= 11 && age <= 15) {
        alert('age entré: '+age+'votre enfant va au collège');
    } else if (age >= 15 && age <= 18) {
        alert('"votre enfant doit aller au lycée');
    } else {
        alert('votre enfant n`\'est pas en âge scolaire');
    }
    
}

quelleEcole();
