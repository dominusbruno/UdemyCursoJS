/*
Escrever uma função de recebe e retorna um numero da requinte maneira:
Número divisivel por 3 = Fizz
Número divisivel por 5 = Buzz
Número divisivel por 3 e 5 = Fizzbuzz
Não divisivel por 3 ou 5, devem retornar somente o número
Checar se o valor inserido é realemente um número.
Só aceitar numeros entre 0 e 100
*/

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 == 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

for (let i = 0; i < 100; i++) {
    console.log(i, fizzBuzz(i))
}
