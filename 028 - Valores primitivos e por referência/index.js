const a = {
    nome:'Bruno',
    sobrenome:'Rodrigues',
}
//const b = a // Apontam para o mesmo local da memória
const b = {...a} // "b" recebe o valor completo de "a" e não mais a referencia na memória

a.nome = 'Francisco'
console.log(a, b)