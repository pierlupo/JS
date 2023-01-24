console.log("hello");

const nbMax = 128;
console.log("nbMax vaut : "+nbMax)

const fruits = ["Pommes"];
fruits.push("Abricots", "Poires");//const garantit la structure de l'objet, on peut donc modifier le tableau.
console.log(fruits);
console.table(fruits);

/*Les nouvelles méthodes apportées par l'ES6:

.forEach
.map()
.find()
.filter()

*/

console.log("---------------------Les nouvelles méthodes apportées par l'ES6---------------------")


const vegetables = [
    {
        code : 1,
        name : "carotte",
        price : 1.99
    },
    {
        code : 2,
        name : "poivrons verts",
        price : 4.99
    },
    {
        code : 3,
        name : "poivrons rouges",
        price : 2.99
    },
    {
        code : 4,
        name : "haricots",
        price : 3.99
    },
    {
        code : 3,
        name : "poivrons jaunes",
        price : 2.99
    },
    {
        code : 5,
        name : "courgettes",
        price : 0.99
    },
]

console.table(vegetables);

console.log("---------------------Parcours du tableau avec foreach---------------------");

vegetables.forEach(function(vegetables) {
    console.log(vegetables.code)
    console.log(vegetables.name)
    console.log(vegetables.price)
})

console.log("---------------------Parcours du tableau avec .foreach(vegetable, index)---------------------");

vegetables.forEach(function(vegetables,index) {
    console.log((index+1)+ " : "+vegetables.name);
})

//.map()

console.log("---------------------Parcours du tableau avec .map(function(){})---------------------");

const listVegetables = vegetables.map(function(vegetables){

    return vegetables.name+" "+vegetables.price+"$";
    
});
console.table(listVegetables); // map retourne un nouveau tableau indexé

//.find()

console.log("--------------------- .find(function(){})---------------------");

//find() retourne le premier élément trouvé
const poivron = vegetables.find(function(vegetables){

    return vegetables.name.includes("poivron");
    
});
console.table(poivron);

//.filter()

console.log("--------------------- .filter(function(){})---------------------");

const poivrons = vegetables.filter(function(vegetables){

    return vegetables.name.includes("poivrons");
    //return !vegetables.name.includes("poivrons");
    
});
console.log(poivrons);
//alert(JSON.stringify(poivrons, null, 1));

console.log("---------------------Destructuring---------------------");

const tabNum = [1, 2, 3];
console.table(tabNum);

//En ES5
// var a = tabNum[0];
// var b = tabNum[1];

// console.log(a);
// console.log(b);

//En ES6 avec le destructuring:
const [a,b] = tabNum;

console.log(a);
console.log(b);

//Autre exemple avec un tableau associatif

const user = {
    firstname : "Jean",
    lastname : "Dupont",
    age : 35,
    active : false
}

// En ES5
// var firstname = user.firstname;
// var lastname = user.lastname;

//En ES6 

const {firstname, lastname, ...userRest} = user;

console.log(firstname);
console.log(lastname);
console.log(userRest);

//Avec des fonctions

function getFullName(user){
    return `${user.firstname} ${user.lastname}`
}

console.log(getFullName(user));

function getFullName({firstname,lastname}){
    return `${firstname} ${lastname}`
}

console.log(getFullName(user));

console.log("---------------------rest operator---------------------");

//let haricots = vegetables[3]; //crée une référence au tableau (n'est pas une vraie copie)

let haricots = {...vegetables[3]}; // une vraie copie car on vient de recréer le tableau associatif (objet)

console.log(haricots);
console.log(vegetables[3]);
console.table(vegetables);

haricots.price = 2.99;

console.log(haricots);
console.log(vegetables[3]); // haricots a modifié le tableau dans mon premier exemple
console.table(vegetables);


const tabNum2 = [1, 2, 3];

const [d, ...e] = tabNum2;
console.log(d);
console.log(e);


