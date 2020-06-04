// DECLARAÇÃO DE FUNÇÃO - MÉTODO 01
function soma(a,b) { //Recebe os valores declarados de A e B,
    let x = a+b // Executa a soma de a+b e atribui à variável X
    return x //Envia para o console.log o valor calculado acima.
}

console.log(soma(10,7)) //Chama a função SOMA e envia para eles os valores 10 para A e 7 para B.




// DECLARAÇÃO DE FUNÇÃO - MÉTODO 02

const raiz = function (n) {
    return n **0.5
}

console.log(raiz(9))




// DECLARAÇÃO DE FUNÇÃO - MÉTODO 03 (mais moderno)

const multiplicacao = n => n*12

console.log(multiplicacao(3))