
//Função para capurar apenas a hora do BRAZIL no formado 24horas
function mostrahora(){
    let data = new Date()
    return data.toLocaleTimeString('pt-BR', {hour12: false})
}

//Função para salvar a hora a cada 1 segundo(1000 milisegundos) dentro da constante "timer"
const time = setInterval(function() {
    console.log(mostrahora())
}, 1000);

//Função para PARAR a execução da constante time depois de 3 segundos (3000 milisegundos)
setTimeout(function() {
    clearInterval(time)
}, 3000);