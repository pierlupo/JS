
//exercice 12:
 
let nbr_an = 0, hbts = 0;

while (hbts <= 120000){
    nbr_an += 1
    hbts = 96809 * Math.pow(1 + 0.0089, nbr_an);
    
}
hbts = Math.round(hbts);
alert(`Au bout de ${nbr_an} ans, Tourcoing aura atteint 120000 habitants, nous serons alors en ${nbr_an + 2015}, il y aura ${hbts} habitants en plus `);



