// IIFE -> Immediately Invoked Function Expression

(function (idade, peso, altura) {
    
    const sobrenome = 'Rodrigues'
    
    function criaNome(nome) {
        const nomeCompleto = `${nome} ${sobrenome}`
        return nomeCompleto
    }
    
    function falaNome() {
        const nome = criaNome('Bruno')
        return nome
    }

    const nomeCompleto = falaNome()
    
    console.log(`${nomeCompleto} tem ${idade} anos, ${peso} quilos e ${altura} metros`)

})(41, 70, 1.78)