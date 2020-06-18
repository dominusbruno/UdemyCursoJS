//MODELO SIMPLIFICADO
//Arrays simples,
let numeros1 = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
let [n1, n2, n3, ,n5, ...restante] = numeros1;

console.log(n1, n2, n3, n5)
console.log(restante);


//MODELO COMPOSTO
//Arrays com arrays internos
let numeros2 = [[1000, 2000, 3000], [4000, 5000, 6000], [7000, 8000, 9000]];
let [,lista2] = numeros2; //Declarando o segundo array como sendo "lista2"

console.log(lista2[1]) //imprimindo o indice [1] da lista2 (2º array interno)
