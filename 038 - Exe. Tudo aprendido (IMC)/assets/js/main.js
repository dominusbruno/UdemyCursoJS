// 01 - Criar o formulário em HTML


// 02 - Capturar o evento de submit do formulário
const form = document.querySelector('#formulario'); // Captura o formulário
form.addEventListener('submit', function(evento){ // Adiciona um evento para capturar o envio do formulário
    evento.preventDefault(); //Evita o envio do formulário
    
    // Captura os valores inseridos nos inputs
    const inputPeso = evento.target.querySelector(`#peso`).value;
    const inputAltura = evento.target.querySelector(`#altura`).value;

    // Converter os valores inseridos em números
    const peso = Number(inputPeso);
    const altura = Number(inputAltura);

    //Checa se o peso/altura são inválidos(Não forem números)
    if (!peso || !altura){
        setResultado(`Peso ou altura inválidos`, false);
        return
    }

    //Calcula o valor do IMC
    const imc = getImc(peso, altura); //Realiza a função de cálculo
    const nivelImc = getNivelImc(imc); //Realiza o tratamento do IMC calculado
    const msg = `Seu IMC é ${imc} - ${nivelImc}.`;
    setResultado(msg, true);
    
});
// Função para inserir uma observação de acordo com o valor do IMC calculado
function getNivelImc(imc) {
    const nivel = [`Abaixo do peso`, `Peso Normal`, `Sobrepeso`, `Obesidade grau 1`, `Obesidade grau 2`, `Obesidade grau 3`];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

//Função para calcular o IMC
function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2);        
}

// 03 - Apresentar o resultado abaixo do formulário

// 03.1 - Cria um parágrafo
function criaP() {
    const p = document.createElement('p'); // Criar parágrafo
    return p; //Retorna o parágrafo criado
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado'); //Seleciona o ID(#resultado) a ser alterado
    resultado.innerHTML = ''; //Zerar o conteúdo da id resultado

    const p = criaP(); //Chama a função criaP

    //Seta que classe do CSS vai ser ativado, 
    if (isValid) { 
        p.classList.add(`paragrafo-resultado`);
    } else{
        p.classList.add(`bad`)
    }

    p.innerHTML = msg; //Cria a msg com a sua função de parágrafo
    resultado.appendChild(p); // Acrescenta o resultado ao html da página
}