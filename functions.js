// genera numeri random

function randomNumber (minNum, maxNum) {
    let generateNumber = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    return generateNumber;
}
// funzione che genera numeri random in un range stabilito

function generateRandomNumbers (min, max, maxLen) {
    //imposta il range di numeri da generare
    const arrayRandomNumbers = [];
    // inserire la nungezza del nostro array
    while (arrayRandomNumbers.length < maxLen) {
            let generateNumber = randomNumber(min, max)
                //pushare dentro l'array i numeri solo una volta
        if (!arrayRandomNumbers.includes(generateNumber)){
            arrayRandomNumbers.push(generateNumber);
        }

    }
    return arrayRandomNumbers;
}

// comparazione di 2 array

function compareArrays(arr1, arr2) {

    // compare arrays
    const result = JSON.stringify(arr1) == JSON.stringify(arr2)

    // if result is true
    if(result) {
        console.log('The arrays have the same elements.');
    }
    else {
        console.log('The arrays have different elements.');
    }

}
