let pessoa = {
    nome: 'Bruno',
    sobrenome: 'Rodrigues',
    idade: '42',
    endereco: {
        rua: 'Av. Alphaville',
        numero: '80',
    }
}

//const {nome,sobrenome, endereco} = pessoa
//console.log(nome, sobrenome)

const {nome, sobrenome, endereco:{rua, numero}} = pessoa
console.log(`Me chamo ${nome} ${sobrenome} e moro na ${rua} número ${numero}.`)