//exercice 10:

let message, choix_boisson;

choix_boisson = prompt("Veuillez choisir une boisson :") ;

switch (choix_boisson) {
    case "eau":
        message = "Vous avez commandé de l'eau "; 
        break;
    case "jus d'oranges":
        message = "Vous avez commandé un jus d'oranges ";
        break;
    case "limonade":
        message = "Vous avez commandé une limonade ";
        break;
    case  "café":
        message = "Vous avez commandé du café ";
        break;
    case "Thé":
       message = "Vous avez commandé du thé ";
        break;
    default:

}

message = alert(`Vous avez commandé ${choix_boisson}`);