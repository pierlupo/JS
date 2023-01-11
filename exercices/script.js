"use strict";
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

// let hypo, 
//     coteAdj1,
//     coteAdj2,
//     cote3,
//     affichage;
    


// coteAdj1 =  Number(prompt(`Veuillez saisir une valeur pour un des côtés adjacents à l'angle : `));
// coteAdj2 =  Number(prompt(`Veuillez saisir une deuxième valeur pour l'autre côté adjacent à l'angle: `));
// //resultat = Math.pow((coteAdj1,2)) + Math.pow((coteAdj2,2)) + Math.pow((cote3,2)) ;
// hypo = Math.sqrt((coteAdj1 * coteAdj1) + (coteAdj2 * coteAdj2)).toFixed(2);

// affichage = `la longueur de l'hypoténuse en fonction de la longueur des côtés adjacents à l'angle est égale à : ${hypo}`;

// console.log(affichage);
// alert(affichage);

//exercice6:

// let tva = 0.2,
//     prixProduitHorsTaxe,
//     ttc = prixProduitHorsTaxe  * tva,
//     affichage="";


// prixProduitHorsTaxe =  Number(prompt(`Veuillez saisir un prix hors taxe : `));

// affichage = `Le prix de votre produit toutes taxes comprises est de : ${ttc} $`;

// console.log(affichage);
// alert(affichage);

//Les structures conditionnelles:

console.log("Les Structures Conditionnelles");

//Avec plusieurs vérifications:
// let compte  = 3000;

// if(compte>0)
// console.log("compte créditeur")

// if(compte<0)
// console.log("compte débiteur");

//Avec plusieurs instructions évitant les vérif inutiles:

let compte  = 3000;

if(compte>0){
    console.log("compte créditeur");
    console.log(`Vous avez ${compte} euros`);
}else{
    console.log("compte débiteur ou null");   
    console.log(`Vous allez payer des agios;  vous avez ${compte} euros`);
}

//Avec un booléen:

let crediteur = (compte>0)

if (crediteur)
console.log("compte créditeur(avec un booléen)");
else
console.log("compte débiteur(avec un booléen)");

//Avec une récupération de saisie utililsateur:

// let age = 0;

// age = Number(prompt("Veuillez entrer votre âge : "));
// console.log(typeof (age)); // vérifie le type de la variable

// if (age < 13){
//     console.log("vous êtes un enfant")
// }
// else if (age >= 18){
//     console.log("vous êtes un adulte")
// }
// else{
//     console.log("vous êtes un adolescent")
// }
// console.log(age)

//Switch:


const civilite = "rien";
switch (civilite) {
    case 'Mr.':
        console.log("Bonjour Monsieur");
        break;
    case 'Mme':
        console.log("Bonjour Madame");
        break;
    default:
        console.log("Bonjour Mademoiselle");
        break;
}

const cond = "autre";
switch (cond) {
    case 'Oranges':
        console.log("Les oranges sont à 2.99€/kg");
        break;
    case 'Mangues':
    case 'Papayes':
        console.log("Les Mangues et les Papayes sont à 9.99€/kg");
        break;
    default:
        console.log(`Désole, nous sommes à cour de ${cond}`);
        break;

}

//Switch avec range de valeur

// let age;
// age = 15;
// let message = "";
// switch (true) {
//     case age <= 6:
//         message = 'Votre enfant est dans la catégorie "BABY" ';
//         break;
//     case age <= 8:
//         message = 'Votre enfant est dans la catégorie "Poussin" ';
//         break;
//     case age <= 10:
//         message = 'Votre enfant est dans la catégorie "Pupille" ';
//         break;
//     case age <= 12:
//         message = 'Votre enfant est dans la catégorie "Minime" ';
//         break;
//     default:
//         message = 'Votre enfant est dans la catégorie "Cadet" ';
//         break;
// }

// console.log(message);

// Les Boucles Itératives:

// for (let i = 1; i <=10; i++) {
//     console.log(`la boucle s'est exécutée ${i} fois`);
// };

// let j = 11;

// while(j<=10){
//     console.log(`la boucle while s'est exécutée ${j} fois`);
//     j++;
// };

// let k = 11;
// do {
//     console.log(`la boucle while s'est exécutée ${k} fois`);
//     k++
// }while(k <= 10);

// Declarations des variables
// let email = "contact@teamjs.fr"; 
// let mdp = "leLundiAuSoleil";
// let message = "";

// let userEmail = prompt("Saisir votre email :");
// let userPassword = prompt("Saisir votre mot de passe :");

// if(userEmail == email){
//     if(userPassword == mdp) {
//         message = "Bienvenue dans votre espace";
//     }else {
//         message = "Mot de passe incorrect";
//     }
// }else {
//     message = "Email inconnu";
// }

// console.log(message);

//exercice8:

let motentrer = prompt('Entrer un mot: ');

const len = motentrer.length;

for (let i = 0; i < len / 2; i++) {

    if (motentrer[i] !== motentrer[len - 1 - i]) {
         alert("C'est un  palindrome");
    }
}
 alert("Ce n'est pas un  palindrome");
            
    


