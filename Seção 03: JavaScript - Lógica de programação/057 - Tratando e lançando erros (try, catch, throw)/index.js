/*
try {
    console.log(naoExisto)
} catch (erro) {
    console.log('Variável não declarada')
}
*/


function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Variável com valor diferente de NUMBER')//Capturando o tipo de erro
    }
    return x + y
}

try {
    console.log(`Certo ${soma(2, 5)}`) // Passagem correta
    console.log(`Certo ${soma('2', 5)}`) // Passagem errada com uma string
    } catch (error) { // Esse bloco CATCH só é executado em caso de erro no try
    console.log("Valor inserido não é um número");

}