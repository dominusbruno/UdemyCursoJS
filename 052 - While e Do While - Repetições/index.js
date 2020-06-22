function random(min, max) {
    // Cria um número aleatório
    const r = Math.random() * (max - min) + min;
    //Somente o número inteiro
    return Math.floor(r);
}

const min = 1;
const max = 4;
let rand = 3; //Para o teste do DO WHILE, definindo a constante "rand" como 3
//let rand = random(min,max);

//ENQUANTO (Condição) FAÇA (Rotina)
while (rand !== 3) {
    rand = random(min, max);
    console.log(rand);
}


console.log ("*************************************")


// FAÇA (Rotina) ENQUANTO (Condição)
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 3);