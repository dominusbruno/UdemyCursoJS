
//APRESENTANDO TODOS AS SUBOPÇÕẼS EXISTENTES
const opcoesCompletas = {
    year: 'numeric', //Ano
    month: 'long', //Mês
    weekday: 'long', //Dia da semana
    day: 'numeric', //Dia do mês
    hour: 'numeric', //Hora
    minute: 'numeric', //Minuto
    second: 'numeric', //Segundos
    era: 'long', //Era
    timeZoneName: 'long' //Timezone do sistema
}

const dataCompleta = new Date().toLocaleDateString('pt-br', opcoesCompletas)
console.log(dataCompleta)



//APRESENTANDO APENAS A DATA E HORÁRIO
const opcoesSimples = {
    dateStyle: 'full',
    timeStyle: 'short'
}

const dataSimples = new Date().toLocaleDateString('pt-br', opcoesSimples)
console.log(dataSimples)

 //Escreve no HTML
 const resultadoBaixo = document.querySelector(`#resultado`);
 resultadoBaixo.innerHTML = `${dataSimples}hs`