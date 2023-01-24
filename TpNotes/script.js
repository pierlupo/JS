let student = document.querySelector('.window0');
let mat = document.querySelector('.window1');
let affichNote = document.querySelector('.window2');

let btn1 = true, btn2 = true, btn3 = true;

onOffElev.addEventListener('click', () => {
    student.classList.add("hidden");
    if(btn1){
        onOffElev.value = "OFF";
        btn1 = false;
    }else {
        onOffElev.value = "ON";
        btn1 = true;
        student.classList.remove("hidden");
    }
})

onOffMat.addEventListener('click', () => {
    mat.classList.add("hidden");
    if(btn2){
        onOffMat.value = "OFF";
        btn2 = false;
    }else {
        onOffMat.value = "ON";
        btn2 = true;
        mat.classList.remove("hidden");
    }
})

onOffNote.addEventListener('click', () => {
    affichNote.classList.add("hidden");
    if(btn3){
        onOffNote.value = "OFF";
        btn3 = false;
    }else {
        onOffNote.value = "ON";
        btn3 = true;
        affichNote.classList.remove("hidden");
    }
})


// function changeText(){
//     let element = document.getElementsByClassName("onOff");
//     console.log(element);
//     if (element.value=="ON") 
//         element.value = "OFF";
//     else 
//         element.value = "ON";
// }

const result = document.querySelector('#result');

let message = "", nom, prenom, matiere;

Valider = () => {
    nom = document.querySelector('#ajoutNom').value;
    prenom = document.querySelector('#ajoutPrenom').value;
    Afficher();
}

ValiderajoutMat = () => {
    mat = document.querySelector('#ajoutMatiere').value;
    Afficher();
}

Afficher = () => {
    //result.textContent += `<h3> Vous avez saisi : ${nom} ${prenom} </h3>`
    result.innerHTML += `<h3> Vous avez saisi : ${nom} ${prenom} </h3>`
}

// select.addEventListener("change", () => {
    //     let moyMat = select.value;
    //     if(moyMat != 0){
        //         output.textContent = `La moyenne de la classe en ${matiere} est de : ${moyMat}`;
        //     }else {
            //         output.textContent="";
            //     }
            
            // });
            //
            // const select = document.getElementById("mySelect");
            
            // select.addEventListener("change", () => {
                //     console.log(select.value);
                // });
                
                let etudiants = [ 
                    { 
                        prenom: "John", 
                        nom: "Smith", 
                       
                    }, 

                    { 
                        prenom: "Drew", 
                        nom: "Baxter", 
                       
                            
                        } 
                    
                ]; 
                
                let matieres = ["Français", "Anglais", "Maths", "Histoire"];
                
                const btn = document.getElementById('valider0');
                let mySelect = document.getElementById('select_elev');
                
                console.log(mySelect.innerHTML);
                
                // for(let i = 0; i<etudiants.length; i++){
                    //         console.log(etudiants[i].prenom +" "+ etudiants[i].nom)
                    
                    // }
                    
                    const refreshEleveSelect = () => {
                        mySelect.innerHTML =`<option value="0">Sélectionnez un élève</option>`;
                        etudiants.forEach(eleve => {
                            //console.log(eleve.nom);
                            select_elev.innerHTML += `<option value ="${etudiants.indexOf(eleve)+1}"> ${eleve.prenom} ${eleve.nom}</option>`;
                        });
                    }
                    refreshEleveSelect();

                    btn.addEventListener("click", () => {

                        let newName = document.getElementById("ajoutNom").value;
                        let newPrenom = document.getElementById("ajoutPrenom").value;
                        let newMat = document.getElementById("ajoutMatiere").value;
                        etudiants.push({
                            nom : newName,
                            prenom : newPrenom,
                            matières : newMat
                        })

                        
                        console.table(etudiants);
                        // newPrenom.textContent = "";
                        // newName.value = "";
                        
                    });
                    

