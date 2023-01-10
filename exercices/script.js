// //la concaténation:

// let toto = "Pierre";
// let verbe = "débute";
// let lang = "programmation";

// //let maPremiereSaisieTextuelle = toto + " " + verbe +  " la " + lang + " en JavaScript !"; // Pre ES6
// let maPremiereSaisieTextuelle = `${toto} ${verbe} la ${lang} en JavaScript !`; // Post ES6

// console.log(maPremiereSaisieTextuelle);

// //Exercice2 :

// let x = 5;
// let y = 10;

// let sum = x + y;

// console.log(sum);
// let maSomme = `la somme de ${x} + ${y} est égale à  ${sum}`; // Post ES6
// console.log(maSomme);

// alert( `la somme de ${x} + ${y} est égale à ${sum}`);

// let   nb1 = 9,
//       nb2 =1,
//       resultat,
//       affichage;

// nb1 = Number(prompt(`Veuillez saisir un nombre : `));
// nb2 = Number(prompt(`Veuillez saisir un nombre : `));

// resultat = nb1+nb2;

// affichage = `la somme de ${nb1} + ${nb2} est égale à : ${resultat}`;

// console.log(affichage)

// alert(affichage);

//exercice3:

let aire,
    diametre, 
    affichage,
    perimetre;

const pi = Math.PI

diametre =  Number(prompt(`Veuillez saisir un diametre : `));
perimetre = diametre * pi;
aire = pi * Math.pow((diametre/2),2);

affichage = `le périmètre du cercle est égale à : ${perimetre} et l'aire est égale à : ${aire}`;

console.log(affichage);
alert(affichage);
