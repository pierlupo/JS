// console.log("hello world depuis mon index.js");

// //commentaire sur une ligne

// /*Valeurs et variables
// var / let / const*/

// let maVariable = "contenu de ma variable";
// maVariable = "contenu modifié";
// var monNombre = 42;

// var maVerification = true;

// const maConst = "maConstante";

// console.log(maVariable);
// console.log(maConst);
// console.log(maVerification);

// //connaître le type d'une variable grâce à typeof:

// var maVar = 42;
// console.log(typeof maVar);
// console.log("variable de type:" , typeof maVar);

// //alert(typeof maVar);
// prompt("le message saisi est : ", maVar)

// //les opérateurs:

// //incrémenter et décrementer:

// let myValue = 100;
// console.log(myValue); //100
// myValue--;
// console.log(myValue); //99
// myValue++;
// console.log(myValue); //100

// //les opérateurs de comparaison:

// let nbA = 10, nbB = 25;

// console.log(nbA != nbB) //true
// console.log(nbA == nbB) //false
// console.log(nbA >= nbB) //false
// console.log(nbA < nbB) //true
// console.log(nbA === nbB) //false

// let nbC = 22;
// let nbD = "22"

// console.log(nbC == nbD);
// console.log(nbC === nbD);

// //addition et multiplication:

// let nbE = 15;
// let nbF = 15;

// let addition = nbE + nbF;
// let multiplication = nbE * nbF;

// console.log("L'addition de " +nbE+ " et " +nbF+ " est égale à : "+addition);
// console.log("La multiplication de " +nbE+ " et " +nbF+ " est égale à : "+multiplication);
// console.log(`La multiplication de ${nbE} et ${nbF}  est égale à : ${multiplication}`);

// //les chaînes de caractères:

// //la concaténation:

// let prenom = "Sarah";
// let nom = "Martin";
// let age = 25;

// let maPhrase = prenom + " " + nom +  " a bientôt " + age + " ans !"; // Pre ES6
// let maPhrase2 = `${prenom} ${nom} a bientôt ${age} ans !`; // Post ES6

// console.log(maPhrase);
// console.log(maPhrase2);

//Les Tableaux:

//Déclarer un tableau :

// let monTableau = [];
// //la même chose : let monTableau = new Array();


// monTableau[0] = "Pomme";
// monTableau[1] = "Poire";

// //affichage console
// console.log(monTableau);
// console.table(monTableau);

// //afficher la valeur:
// console.log(monTableau[1]);

// //Déclarer et affecter valeur en même temps:
// let legumes = ["carottes", "choux", "haricots"];
// //let legumes = new array("carottes", "choux", "haricots"); c'est la même chose.

// //Réaffectation de valeur:

// console.log(legumes[2]);
// legumes[2] = "epinards";
// console.log(legumes[2]);

// //Affichage du nombre d'éléments dans le tableau

// let nbLegumes = legumes.length;
// console.log("Mon tableau contient " + nbLegumes + " légumes.");

// //Insertion avec récupération auto du dernier index:

// legumes[legumes.length]="pomme de terre";
// legumes[legumes.length]="pomme de terre";
// legumes[legumes.length]="pomme de terre";
// legumes[legumes.length]="pomme de terre";
// legumes[legumes.length]="pomme de terre";
// console.log(legumes)

// //retirer le dernier élément d'un tableau:
// //pop();

// legumes.pop();
// legumes.pop();
// legumes.pop();
// legumes.pop();
// console.log(legumes)

// //retirer le premier élément d'un tableau:
// legumes.shift();
// console.log(legumes)


// //insertion avec récup automatique du dernier index
// legumes[legumes.length]="test";
// legumes[legumes.length]="test";
// legumes[legumes.length]="test";
// legumes[legumes.length]="test";


// console.table(legumes);

// //Retirer un ou plusieurs éléments à un index donné =>splice(indexDepart, nbElementRetirer)
// legumes.splice(6,4);
// console.table(legumes);

// //Ajouter un éléments à un index donné => splice(indexDepart, nbElementRetirer, valueaAjouter)
// legumes.splice(6,0,"concombre", "test");
// console.table(legumes);

// //Obtenir l'index d'une valeur de mon tableau :
// console.log(legumes.indexOf("test"));
// //Savoir si il y a une valeur dans mon tableau :
// console.log(legumes.includes("test"));

//Déclarer deux tableaux:

// let legumes = ["carottes", "choux", "haricots"];
// let fruits =["raisins", "bananes","abricots"];

// //Affichage des deux tableaux
// console.table(legumes);
// console.table(fruits);

// //création d'un tableau à 2 dimensions depuis nos deux tableaux:
// let primeur = [legumes, fruits];
// //let primeur = new Array(legumes, fruits); c'est la même chose.

// //Affichage d'un tableau à deux dimensions:
// console.table(primeur);

// //Affichage d'un élément précis:

// //carottes
// //abricots

// console.log(primeur[0][0]);
// console.log(primeur[1][2]);

//Les objets / tableau associatif / objet littéral:
//Dans un objet on peut stocker toutes les sortes de variables, ainsi qu'un ou plusieurs tableaux.

//Déclarer un tableau associatif:

// let personne = {
//     nom : "toto",
//     prenom : "titi",
//     age : 2 
// };

// Affichage d'un tableau
// console.log(personne);
// console.log(personne);

// //De quel type est personne? :
// console.log(typeof personne);

// //Afficher la valeur affectée à une clé :
// console.log(personne.prenom);
// console.log(personne["nom"]);

//Parcourir un tableau avec la boucle for:

//let jourSem = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];

//Itération :

// for(let i = 0; i < jourSem.length; i++){
//     console.log(jourSem[i]);

// Afficher "Bon début de semaine"  sur lundi, mardi, mercredi: 

//   if(i >= 0 && i < 3){
//         console.log("Bon début de semaine");
//     }
// };

// Afficher "Bon début de semaine"  pareil mais pas le  lundi:

// for(let i = 0; i < jourSem.length; i++){
//     console.log(jourSem[i]);

// Afficher "Bon début de semaine"  sur lundi, mardi, mercredi: 

// for(let i = 0; i < jourSem.length; i++){
//         console.log(jourSem[i]);
    
//    if(i >= 1 && i < 3){
//         console.log("Bon début de semaine");
//      }
//  };


//La boucle Pour.. Dans... (For... In...)

//Parfait pour les tableaux associatifs : 

// let contact = {
//     nom : "Richard",
//     prenom : "Pierre",
//     specialite : "Boucle infinie"
// };

//Exemple de For ... in... : 

// for(let key in contact){
//     console.log(key);
//     console.log(contact[key]);
//     console.log(key + " : " +contact[key]);
// };

//Exemple de for... of...
//ne fonctionne pas sur les tableaux sans crochets:

// let names = ["Adam", "Etienne","Sebastien","Clément","Virginie"];

// for(const value of names){
    
//     console.log(`La boucle for... of... permet d'afficher "${value}" (une des valeurs de names) `);
// };

//Boucles imbriquées:

// for(let i = 0; i < 100; i+=10){
//     console.log("i = "+i);
//     // for(let j = 1; j < 5; j++){
//     //     console.log("Deuxième boucle j = "+j);
//     // }
//     //i++;
// };



// let personne = {
//     nom : "toto",
//     prenom : "titi",
//     age : 2 
// };

// // Affichage d'un tableau

// console.log(personne);
// console.log(personne);

// // //Afficher la valeur affectée à une clé :

// console.log(personne.prenom);
// console.log(personne["nom"]);

// //Opérateur rest et spread : 

// const tabNum = [1,2,3];
// console.table(tabNum);

//en ES5:

// const a = tabNum[0];
// const b = tabNum[1];

// // console.log(a);
// // console.log(b);

// //En ES6 avec le destructuring nous pouvons l'écrire:

// const [c,e, ...d] = tabNum;

// console.log(c);
// console.log(d);
// console.log(e);

// let legumes = ["carottes", "choux", "haricots"];
// let fruits =["raisins", "bananes","abricots"];

// let aliments = [...legumes,"patates", ...fruits,"cerises"];

// console.table(aliments);

//Même principe avec les objets :

// const personne ={
//     nom : "Richard",
//     prenom : "Pierre",
//     specialite :"Boucle infinie"
// }

// const {specialite, ...person} = personne;
// //person est nouvel objet auquel on assigne le rest des "key" non utilisées

// console.log(specialite);
// console.log(person);

// const {nom, prenom} = personne;
// console.log(nom);
// console.log(prenom);

// //Ajouter des valeurs:

// const personneAvecAge = {...personne, age : 250};
// console.log(personneAvecAge);
// console.table(personneAvecAge);

//LES FONCTIONS:

//fonction anonyme sans const :
// calcAge = (birthyear) => 2022-birthyear 
// let age1 = calcAge(1984);
// console.log(age1);

//Les fonctions natives:

/*

alert();

prompt();

confirm();

*/

//fonctions non-natives (faites par le user);

// calcAge = (birthyear) => 2022-birthyear;
// let age1 = calcAge(1984);
// console.log(age1);

//fonctions sans paramètres et sans retour:

// function myFunction (){

//   console.log("hello")
// }
// myFunction();
    
// //fonctions avec paramètres et sans retour:
// //si on met un 
// function mySecondFunction (firstname="Théo"){

//     console.log(`hello ${firstname}`)
// }
// mySecondFunction("Pierre");
// mySecondFunction();

//Fonction avec paramètres et avec retour:

// function otherFunction(firstname = "Jean"){
//      let chaine = `hello ${firstname}`
//      return chaine;
// }

// let message = otherFunction();
// console.log(message);


//Arrow function :

// const otherFunction = (firstname="Jean") => `hello ${firstname}`;
// let message = otherFunction();
// console.log(message);

// const calcAge = (birthyear) => 2023-birthyear;
// let age1 = calcAge(1984);
// let age2 = calcAge(2009);
// console.log(age1); //39
// console.log(age2); //14

// let myTotoFunction = function(){};
// myTotoFunction = () => `toto`;
// console.log(myTotoFunction());

//Avec un objet: 

// let legume = {
//     code :3 ,
//     name : "poivron rouge",
//     price : 4.99
// }

// Créé une fonction à qui on passe en paramètre un objet et qui nous renvoie son nom:

// let myObject = function (vegetable) {
//     return vegetable.name; 
// }
// console.log(myObject(legume));

// const myObject = (vegetable) => vegetable.code;
// console.log(myObject(legume));

// function myObject2(vegetable) {
// console.log(`${vegetable.price}$`)
// }
// myObject2(legume);

// function nameAndFirstName(firstname = "Jean", name ="Moulin"){
//     console.log(`hello ${firstname} ${name}`)
// }
// nameAndFirstName("John", "Doe");

// let tabPerson = ["Pierre", "Hasard"];

// function nameTab (){
//     `hello ${tabPerson[0],tabPerson[1]}`
// }
// console.log(nameTab(tabPerson));

//console.log(nameAndFirstName(tabPerson[0],tabPerson[1]));
//console.log(...tabPerson);

// Ressources
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String

let chaine = "Bonjour, comment allez-vous?",
  str1 = "Bonjour, ",
  str2 = "comment ",
  str3 = "allez-vous?";


/**
 * charAt(index)
 * charCodeAt(index) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt 
 */

console.log(chaine.charAt(2)); // n
console.log(chaine.charCodeAt(2));
console.log(chaine[0]);

/**
 * concat()
 */

console.log(String.prototype.concat(str1, str2, str3));

/**
 * includes() renvoie un boolean
 */

console.log(chaine.includes(','));

/**
 * endsWith()
 */

console.log(chaine.endsWith('?'));

/**
* indexOf()
*/

console.log(chaine.indexOf('o'));
/**
* lastIndexOf()
*/

console.log(chaine.lastIndexOf('o'));

/**
 * Match() https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/match 
 */
 const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur commodo ullamcorper. Donec scelerisque quis risus et commodo. Mauris feugiat fringilla risus, efficitur sodales metus lacinia quis.' ;
 const regex = /[A-Z]/g;
 const found = paragraph.match(regex);
 
 console.table(found); // [ 'L','I', 'D','M']


/**
  * split()
  */

console.log(chaine.split(''));
console.log(chaine.split(' '));
console.log(chaine.split(','));


/**
 * array.reverse()
 */
var arrayChaine = chaine.split(',').reverse();
console.log(arrayChaine);


/**
 * join()
 */

// newChaine=arrayChaine.join('-');
console.log(arrayChaine.join('-'));
console.log(arrayChaine.join(' '));
console.log(arrayChaine.join(''));
