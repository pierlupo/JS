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

// let aire,
//     diametre, 
//     affichage,
//     perimetre;

// const pi = Math.PI

// diametre =  Number(prompt(`Veuillez saisir un diametre : `));
// perimetre = diametre * pi;
// aire = pi * Math.pow((diametre/2),2);

// affichage = `le périmètre du cercle est égale à : ${perimetre} et l'aire est égale à : ${aire}`;

// console.log(affichage);
// alert(affichage);


//exercice4:
//Carré:
// let aire, 
//     cote,
//     affichage,
//     perimetre;


// cote =  Number(prompt(`Veuillez saisir une valeur pour un côté : `));
// perimetre = cote * 4;
// aire = Math.pow((cote),2);

// affichage = `le périmètre du carré est égale à : ${perimetre} et son aire est égale à : ${aire}`;

// console.log(affichage);
// alert(affichage);

//Rectangle:
// let aireRec, 
//     largeur,
//     longueur,
//     affichageRec,
//     perimetreRec;


// largeur =  Number(prompt(`Veuillez saisir une valeur pour une largeur : `));
// longueur =  Number(prompt(`Veuillez saisir une valeur pour une longeur : `));
// perimetreRec = largeur * 2 + longueur * 2;
// aireRec = largeur * longueur;

// affichageRec = `le périmètre du rectangle est égale à : ${perimetreRec} et son aire est égale à : ${aireRec}`;

// console.log(affichageRec);
// alert(affichageRec);

//exercice5:

let hypo, 
    coteAdj1,
    coteAdj2,
    cote3,
    affichage;
    


coteAdj1 =  Number(prompt(`Veuillez saisir une valeur pour un des côtés adjacents à l'angle : `));
coteAdj2 =  Number(prompt(`Veuillez saisir une deuxième valeur pour l'autre côté adjacent à l'angle: `));
//resultat = Math.pow((coteAdj1),2) + Math.pow((coteAdj2),2) + Math.pow((cote3),2) ;
hypo = Math.sqrt((coteAdj1 * coteAdj1) + (coteAdj2 * coteAdj2)).toFixed(2);

affichage = `la longueur de l'hypoténuse en fonction de la longueur des côtés adjacents à l'angle est égale à : ${hypo}`;

console.log(affichage);
alert(affichage);

