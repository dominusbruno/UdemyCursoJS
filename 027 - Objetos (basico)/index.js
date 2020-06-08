
//Essa função cria o objeto "PESSOA"
function criaPessoa(nome, sobrenome, idade) {
    return{nome, sobrenome, idade}
}


//Utilizando a função "criaPessoa" para criar 2 objetos
const pessoa1 = criaPessoa('Bruno', 'Rodrigues', 42)
const pessoa2 = criaPessoa('Carol', 'Fernandes', 38)


//Imprimindo os valores dos objetos
console.log(pessoa1.nome, pessoa2.nome)
console.log(pessoa1.sobrenome, pessoa2.sobrenome)
console.log(pessoa1.idade, pessoa2.idade)