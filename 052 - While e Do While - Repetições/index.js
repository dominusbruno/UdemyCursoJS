function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r); //Somente o número inteiro
}

const min = 1;
const max = 12;
let rand = 10;
//let rand = random(min,max);

//ENQUANTO (Condição) FAÇA (Rotina)
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}


console.log ("*************************************")


// FAÇA (Rotina) ENQUANTO (Condição)
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);