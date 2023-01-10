//la concaténation:

let toto = "Pierre";
let verbe = "débute";
let lang = "programmation";

//let maPremiereSaisieTextuelle = toto + " " + verbe +  " la " + lang + " en JavaScript !"; // Pre ES6
let maPremiereSaisieTextuelle = `${toto} ${verbe} la ${lang} en JavaScript !`; // Post ES6

console.log(maPremiereSaisieTextuelle);

