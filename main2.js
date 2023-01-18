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
        name : "Haricots",
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

console.log("---------------------Parcours du tableau avec foreach---------------------")

vegetables.forEach(function(vegetables) {
    console.log(vegetables.code)
    console.log(vegetables.name)
    console.log(vegetables.price)
})

console.log("---------------------Parcours du tableau avec .foreach(vegetable, index)---------------------")

vegetables.forEach(function(vegetables,index) {
    console.log((index+1)+ " : "+vegetables.name);
})

//.map()

console.log("---------------------Parcours du tableau avec .map(function(){})---------------------")

const listVegetables = vegetables.map(function(vegetables){

    return vegetables.name+" "+vegetables.price+"$";
    
});
console.table(listVegetables); // map retourne un nouveau tableau indexé

//.find()

console.log("--------------------- .find(function(){})---------------------")

//find() retourne le premier élément trouvé
const poivron = vegetables.find(function(vegetables){

    return vegetables.name.includes("poivron");
    
});
console.table(poivron);

//.filter()

console.log("--------------------- .filter(function(){})---------------------")

const poivrons = vegetables.filter(function(vegetables){

    //return vegetables.name.includes("poivrons");
    return !vegetables.name.includes("poivrons");
    
});
console.log(poivrons);
alert(JSON.stringify(poivrons, null, 1));