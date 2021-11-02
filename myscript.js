//1. Chiuedo al'utente che difficolta vuole
//  1.1 creo un prompt in cui gli chiedo il grodo di difficoltà
//  1.2 creo un ciclo while per ripetere il pronpt se l'utente sbaglia
//2. Creo le condizioni per la quale varia il numero di quadrati in base alla difficoltà
//3. Creo un ciclo dove genero i quadrati
//  3.1 creo un div dentro il ciclo che mi costruirà il quadrato
//  3.2 aggiungo le cassi al div per dargli dimensione e stile anche in base alla scelta
//4. Aggiungo un addEventListener ("click"... dentro il ciclo
//  4.1  aggiungo la classe "click-true" per cambiargli lo sfondo
//  4.2 stampo la posizione del quadrato
//5.Invio tutto alla variabile gridCont 


const gridCont = document.getElementById("grid");

let livello = prompt("Scegli: facile, medio, difficile");

while ((livello != "facile") && (livello != "medio") && (livello !="difficile")){
    livello = prompt("Scegli: facile, medio, difficile");
}

let dimensione;
if(livello == "facile") {
    dimensione = 100
    difficolta = "facile"
} else if( livello == "medio"){
    dimensione = 81
    difficolta = "medio"
} else if (livello== "difficile"){
    dimensione = 49;
    difficolta ="difficile";
}


for(let i = 0; i < dimensione; i++) {
    // let newElement = elementGen("div", "square", "difficolta")
    let newElement = document.createElement("div")
    newElement.classList.add(difficolta)
    newElement.classList.add("square")
    
    newElement.addEventListener("click",
    function(){
        this.classList.add("click-true")
        newElement.innerHTML += i+1
        }
    )

    gridCont.appendChild(newElement)
}

// funzioni utili

// function elementGen(elementGen, classPlus, classPlusB) {
    // let node= document.createElement(elementGen);
    // node.classList.add(classPlus)
    // node.classList.add(classPlusB)
//     return node
// }