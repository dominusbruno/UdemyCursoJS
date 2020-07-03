
//Função sem parametro, salva os valores enviados por parametro em um array[arguments]
function funcao1() { //Declarando a função sem parametro
    let total = 0 //Declaramos uma variável para receber a soma dos valores de "arguments"
    for (const i of arguments) { //Varremos os indices do "arguments"
        total += i; // Somamos os valores ao existente na variavel "total"
    }
    console.log(total) // Imprimimos o valor de "total"
}
funcao1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

//Função com parametro direto de um objeto, cada argumento recebe uma variável
function funcao2({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)    
}
let objeto = {nome: 'Bruno', sobrenome: 'Eduardo', idade: 42}
funcao2(objeto)

//Função com operador "rest operator"
function funcao3(operador, acumulador, ...numeros) {
    for (let i of numeros) {
        if (operador === "+") acumulador += i;
        if (operador === "-") acumulador -= i;
        if (operador === "/") acumulador /= i;
        if (operador === "*") acumulador *= i;
    }
    console.log(`Total = ${acumulador}`)
}
funcao3("/", 2, 10, 20, 30, 40, 50)