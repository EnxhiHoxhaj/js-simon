// mostra 5 numeri random da far memorizare

// seleziono il mio container e i div presenti in pagina

let container = document.getElementById("container");
let containerNumeri = document.getElementById("numbers");
let messaggioFinale = document.getElementById("show_numbers");

// genera un array di 5 numeri random
let arrayNumbers = generateRandomNumbers (1, 1000, 5);
console.log(arrayNumbers);
// fagli comparire sullo schermo per 30 secondi

// chiedi all'utente di inserire uno alla volta i numeri che si ricorda

// costrare all'utente i numeri indovinati

// chiedi all'utente qual numeri gli sono stati mostrati