function criaPessoa(nome, sobrenome, altura, peso) {
    return{
        nome,
        sobrenome,
        fala(assunto){
            return `${this.nome} está falando sobre ${assunto}`
        },
        altura,
        peso,
        imc() {
            const imc = this.peso / this.altura ** 2
            return imc.toFixed(2);        
        },

        //Criando um GETTER, o mesmo se passará por atributo
        get nomeCompleto(){
            const nomeCompleto = (`${this.nome} ${this.sobrenome}`)
            return nomeCompleto
        },

        //Criando um SETTER
        set nomeCompleto(valor){
            valor = valor.split(' ') //Separa e salva o "valor" em um array
            this.nome = valor.shift() //Remove o primeiro indice e atribui o valor removido a variável "nome"
            this.sobrenome = valor.join(' ')
            console.log(valor)
            console.log(nome)
            console.log(sobrenome)
        }
    }
}

const p1 = criaPessoa('Bruno', 'Rodrigues', 1.78, 70)
const p2 = criaPessoa('Carol', 'Fernandes', 1.60, 50)

console.log(`${p1.fala('Política')} e tem IMC ${p1.imc()}`)
console.log(`${p2.nomeCompleto} tem IMC ${p1.imc()}`)


p1.nomeCompleto = 'João Vitor Fernandes'
console.log(p1.nomeCompleto)