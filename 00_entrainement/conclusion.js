let monAlerte = function () {
    alert('Alerte exécutée dans une fonction anonyme');
}

monAlerte();

// auto-invocation d'une fonction annoyme
(function () {
    alert('Alerte dans une seconde fonction')
})();

let para1 = document.getElementById('p1');// en variable je passe le p id p1
console.log(typeof para1, para1);

para1.addEventListener('click', function () {
    // sur cette variable, j'ajoute un écouteur d'évenement avec,au clique, une fonction anonyme qii s'éxecute à la demande

    alert('Eh ! tu as bien cliqué sur le paragraphe 1 !');
});

let para2 = document.getElementById('p2');

para2.addEventListener('dblclick', function () {
    alert('Et là un double clique sur le paragraphe');
});

//fonction récursive
function decompte(t) {
    if (t > 10) {
        document.getElementById('p3').innerHTML += t + ' - ';
        return decompte(t - 10);
    } else {
        return t;
    }
}

decompte(500);