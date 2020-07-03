
function meuEscopo() {
    const form = document.querySelector('.form'); //Seleciona o formulário pela CLASS ".form"
    const resultado = document.querySelector('.resultado'); //Seleciona o local da página html aonde serão acrescentados os valores

    const pessoas = [];//Criação do array "pessoas" para salvar os dados

    function recebeEventoForm(evento) {
        evento.preventDefault();//Impede a execução do comando padrão do navegador(neste caso refresh)
        

        //Salvando os valores inseridos em suas constantes "nome, sobrenome, peso, altura"
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        //Acrescentando os valores das constantes no array pessoas
        pessoas.push({
            nome:nome,
            sobrenome:sobrenome,
            peso:peso,
            altura:altura
        })

        //Acrescentando os valores ao HTML
        resultado.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}</p>`

        //Imprimindo no console
        console.log(pessoas)
        console.log(nome,sobrenome,peso,altura)

    }

    form.addEventListener('submit', recebeEventoForm) //No formulário, monitora o click no botão enviar que por padrão executa o comando "submit" e ao ser clickado executa a função "recebeEventoForm"
}
meuEscopo();