function Pessoa(nome, sobrenome) {
    const ID = 123456
    const metodoInterno = function () {
        
    }

    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function () {
        console.log(`${this.nome}: sou um método`)
    }

}

const p1 = new Pessoa('Luiz', 'Otávio')
const p2 = new Pessoa('Maria', 'Oliveira')

p1.metodo()
p2.metodo()