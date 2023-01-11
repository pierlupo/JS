//exercice 13:

let n = 0, som = 0, affichage, choix;

choix = Number(prompt("Veuillez entrer un nombre : "))

for(let i = 0; i <= choix; i++){

    som = som + i

    }


Number(alert(`les sommes possibles de cet entier n sont : ${som}`));
