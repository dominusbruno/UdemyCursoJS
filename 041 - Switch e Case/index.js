const data = new Date() //Acrescenta a data atual na variável data
const diaSemana = data.getDay(); //Pega apenas o dia da semana

const diaSemanaTexto = getDiaSemanaTexto(diaSemana)


function getDiaSemanaTexto(diaSemana) {
let diaSemanaTexto

    switch (diaSemana) {
    case 0:
        diaSemanaTexto = "Domingo"
        break;
    case 1:
        diaSemanaTexto = "Segunda-feira"
        break;
    case 2:
        diaSemanaTexto = "Terça-feira"
        break;
    case 3:
        diaSemanaTexto = "Quarta-feira"
        break;
    case 4:
        diaSemanaTexto = "Quinta-feira"
        break;
    case 5:
        diaSemanaTexto = "Sexta-feira"
        break;
    case 6:
        diaSemanaTexto = "Sábado"
        break;
    default:
        diaSemanaTexto = "Essa data é inexistente"
        break;
}
return diaSemanaTexto;
}



console.log(diaSemana, diaSemanaTexto)

