//Função que captura e formata os segundos de acordo com o timezone
function criaHoraDosSegundos(segundos){
    let data = new Date(segundos * 1000) //Multiplicamos por 1000 pois o horário é em milisegundos
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC',
    })
}

//SELECIONAR TODAS AS CLASSES
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)
}

//Evento que inicia o cronometro/timer
iniciar.addEventListener('click', function (event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);    
    iniciaRelogio();
});

//Função que realiza uma pausa na variável que controla os segundos
pausar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.classList.add('pausado');
});

//Função que zera o relógio
zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    relogio.classList.remove('pausado');
    segundos = 0;
});

