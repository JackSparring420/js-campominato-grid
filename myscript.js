//1. Chiuedo al'utente che difficolta vuole
//  1.1 creo un prompt in cui gli chiedo il grodo di difficoltà
//2. Creo le condizioni per la quale varia il numero di quadrati in base alla difficoltà
//3. Creo un ciclo dove genero i quadrati
//4. Aggiungo un addEventListener ("click"... dentro il ciclo
//  4.1  aggiungo la classe "click-true" per cambiargli lo sfondo
//  4.2 aggiundo la clase "done" per far visionare la posizione del quadrato


const gridCont = document.getElementById("grid");

const livello = prompt("Scegli: facile, medio, difficile")

let difficolta;
if(livello == "facile") {
    difficolta = 100
    dimensione = "facile"
} else if( livello == "medio"){
    difficolta = 81
    dimensione = "medio"
} else if (livello== "difficile"){
    difficolta = 49;
    dimensione ="difficile";
}


for(let i = 0; i < difficolta; i++) {
    let newElement = elementGen("div", "square", dimensione);
    
    newElement.addEventListener("click",
    function(){
        this.classList.add("click-true")
        newElement.innerHTML += `${i+1}`
        }
    )

    gridCont.appendChild(newElement)
}

// funzioni utili

function elementGen(elementGen, classPlus, classPlusB) {
    let node= document.createElement(elementGen);
    node.classList.add(classPlus)
    node.classList.add(classPlusB)
    return node
}