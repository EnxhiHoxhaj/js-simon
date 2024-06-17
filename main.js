// mostra 5 numeri random da far memorizare
// Array vuoto dei numeri indicati dall'user
let arrayNumVisti= [];

// seleziono il mio container e i div presenti in pagina
let containerNumeri = document.getElementById("numbers");
let copertura = document.querySelector(".hidde_numbers");

// genera un array di 5 numeri random
let arrayNumbers = generateRandomNumbers (1, 1000, 5);
containerNumeri.innerHTML = (arrayNumbers);
console.log(arrayNumbers);

// fagli comparire sullo schermo per soli 30 secondi
setTimeout (comparsaElemento, 2000);
// MyFunction
function comparsaElemento () {
    copertura.classList.add("over");
}

setTimeout (richiestaInserimentoNumeri, 2900);
function richiestaInserimentoNumeri() {

    // chiedi all'utente di inserire uno alla volta i numeri che si ricorda

    for( let i = 0; i < 5; i++) {
    let cosaHaiVisto = parseInt(prompt("Inserisci uno dei numeri che hai visto"));
    arrayNumVisti.push(cosaHaiVisto);
    }
    console.log(arrayNumVisti);

    return arrayNumVisti;
}

let corretti= [];
if (arrayNumbers.includes(arrayNumVisti)) {

    corretti.push(arrayNumVisti);
    console.log(corretti);
}


// mostrare all'utente i numeri indovinati
