//JS pour la parge opérateurs
// alert ('coucou');

let x = 200;
let y = 4;
let z = 40;

console.log(x, y, z);

let a = x + 1;
let b = x + y;
let c = x - y;
let d = x * y;
let e = x / y;
let f = 5 % 3;

// ** exponentielle ou 2 puissance 3
let g = 2 ** 3;


console.log(a, b, c, d, e);
console.log(f);
console.log(g);


// Une alerte pour afficher les résultats;
// alert('a contient :'+a+
// '\n b contient : '+b+
// '\n c contient : '+c+
// '\n d contient : '+d+
// '\n e contient : '+e+
// '\n f contient : '+f+
// '\n g contient : '+g
// );

// priorité des calculs
var h = 1 - 2 - 3;

// le calcul se fait de gauche à droite
console.log(h);
let j = 1 + 4 - 5;
console.log(j);

// sauf pour l'élévation qui se fait de droite à gauche
// 2 ** 3  
let k = 2 ** 3 ** 2;
console.log(k);

// avec des parenthèses
let l = (1 - 2) * 3;
console.log(l);

let m = 58;
console.log(m);
m += 2;
console.log(m);

m -= 50;
console.log(m)
