//1. Chiuedo al'utente che difficolta vuole
//  1.1 creo un prompt in cui gli chiedo il grodo di difficoltà
//2. Creo le condizioni per la quale varia il numero di quadrati in base alla difficoltà
//2.1 il numero di quadrati totale deve variare in relazione al n di righe
//3. Creo un ciclo dove genero i quadrati
//4. Aggiungo un addEventListener ("click"... dentro il ciclo
//  4.1  aggiungo la classe "click-true" per cambiargli lo sfondo
//  4.2 aggiundo la clase "done" per far visionare la posizione del quadrato


const gridCont = document.getElementById("grid");

const livello = prompt("Scegli: facile, medio, difficile")

let difficolta;
if(livello == "facile") {
    difficolta = 7
} else if( livello == "medio"){
    difficolta = 9
} else if (livello== "difficile"){
    difficolta = 10
}

for(let i = 0; i < difficolta; i++){
        let newElement = elementGen("div", "row");
        gridCont.appendChild(newElement)
}

// for(let i = 0; i < difficolta; i++) {
//     let newElement = elementGen("div", "square");
//     newElement.innerHTML += `${i+1}`

//     newElement.addEventListener("click",
//         function(){
//             this.classList.add("click-true")
//         }
//     )

//     gridCont.appendChild(newElement)
// }

// funzioni utili

function elementGen(elementGen, classPlus) {
    let node= document.createElement(elementGen);
    node.classList.add(classPlus)
    return node
}