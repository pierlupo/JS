console.log("hello world depuis mon index.js");

//commentaire sur une ligne

/*Valeurs et variables
var / let / const*/

let maVariable = "contenu de ma variable";
maVariable = "contenu modifié";
var monNombre = 42;

var maVerification = true;

const maConst = "maConstante";

console.log(maVariable);
console.log(maConst);
console.log(maVerification);

//connaître le type d'une variable grâce à typeof:

var maVar = 42;
console.log(typeof maVar);
console.log("variable de type:" , typeof maVar);

//alert(typeof maVar);
prompt("le message saisi est : ", maVar)

//les opérateurs:

//incrémenter et décrementer:

let myValue = 100;
console.log(myValue); //100
myValue--;
console.log(myValue); //99
myValue++;
console.log(myValue); //100

//les opérateurs de comparaison:

let nbA = 10, nbB = 25;

console.log(nbA != nbB) //true
console.log(nbA == nbB) //false
console.log(nbA >= nbB) //false
console.log(nbA < nbB) //true
console.log(nbA === nbB) //false

let nbC = 22;
let nbD = "22"

console.log(nbC == nbD);
console.log(nbC === nbD);

//addition et multiplication:

let nbE = 15;
let nbF = 15;

let addition = nbE + nbF;
let multiplication = nbE * nbF;

console.log("L'addition de " +nbE+ " et " +nbF+ " est égale à : "+addition);
console.log("La multiplication de " +nbE+ " et " +nbF+ " est égale à : "+multiplication);
console.log(`La multiplication de ${nbE} et ${nbF}  est égale à : ${multiplication}`);

//les chaînes de caractères:

//la concaténation:

let prenom = "Sarah";
let nom = "Martin";
let age = 25;

let maPhrase = prenom + " " + nom +  " a bientôt " + age + " ans !"; // Pre ES6
let maPhrase2 = `${prenom} ${nom} a bientôt ${age} ans !`; // Post ES6

console.log(maPhrase);
console.log(maPhrase2);










