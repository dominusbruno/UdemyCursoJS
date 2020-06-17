//CAPTURAR A DATA/HORA ATUAL

const data = new Date()
const diaSemana = data.getDay()
const diaMes = zeroAEsquerda(data.getDate())
const mesAtual = data.getMonth()
const anoAtual = data.getFullYear()
const horaAtual = zeroAEsquerda(data.getHours())
const minutoAtual = zeroAEsquerda(data.getMinutes())
const segundosAtual = zeroAEsquerda(data.getSeconds())

//Função para acerscentar um 0 a esquerda dos números abaixo de 10.
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;    
}


//A constante "diaSemanaTexto" vai receber o resultado que sair da função "getDiaSemanaTexto"
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
const mesAtualTexto = getMesAtualTexto(mesAtual);

//A função vai pegar o valor da constante "diaSemana" e verificar em qual CASE ele se encaixa,
//Retornando para fora da função o valor referido, salvo
function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto

    switch (diaSemana) {
    case 0:
        diaSemanaTexto = "Domingo"; break;
    case 1:
        diaSemanaTexto = "Segunda-feira"; break;
    case 2:
        diaSemanaTexto = "Terça-feira"; break;
    case 3:
        diaSemanaTexto = "Quarta-feira"; break;
    case 4:
        diaSemanaTexto = "Quinta-feira"; break;
    case 5:
        diaSemanaTexto = "Sexta-feira"; break;
    case 6:
        diaSemanaTexto = "Sábado"; break;
    default:
        diaSemanaTexto = "Essa data é inexistente"; break;
    }
    return diaSemanaTexto;
}
    
function getMesAtualTexto(mesAtual) {
    let mesAtualTexto;

    if (mesAtual == 0) return "Janeiro";
    if (mesAtual == 1) return "Fevereiro";
    if (mesAtual == 2) return "Março";
    if (mesAtual == 3) return "Abril";
    if (mesAtual == 4) return "Maio";
    if (mesAtual == 5) return "Junho";
    if (mesAtual == 6) return "Julho";
    if (mesAtual == 7) return "Agosto";
    if (mesAtual == 8) return "Setembro";
    if (mesAtual == 9) return "Outubro";
    if (mesAtual == 10) return "Novembro";
    if (mesAtual == 11) return "Dezembro";
    
    return mesAtualTexto;
}


console.log(`${diaSemanaTexto}, ${diaMes} de ${mesAtualTexto}
 de ${anoAtual} - ${horaAtual}:${minutoAtual}`);

const resultado = document.querySelector(`#resultado`);
resultado.innerHTML = `${diaSemanaTexto}, ${diaMes} de
 ${mesAtualTexto} de ${anoAtual} - ${horaAtual}:${minutoAtual}:${segundosAtual}hs`