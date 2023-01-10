//la concaténation:

let toto = "Pierre";
let verbe = "débute";
let lang = "programmation";

//let maPremiereSaisieTextuelle = toto + " " + verbe +  " la " + lang + " en JavaScript !"; // Pre ES6
let maPremiereSaisieTextuelle = `${toto} ${verbe} la ${lang} en JavaScript !`; // Post ES6

console.log(maPremiereSaisieTextuelle);

//Exercice2 :

let x = 5;
let y = 10;

let sum = x + y;

console.log(sum);
let maSomme = `la somme de ${x} + ${y} est égale à  ${sum}`; // Post ES6
console.log(maSomme);
