/*
new Date();
new Date(valor);
new Date(dataString);
new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);
*/

// PEGANDO INFORMAÇÕES DE DATA

const data = new Date()


console.log(`${(data)} - Em formato crú`)
console.log(`${(data).toLocaleString('pt-BR')} - Em formato pt-BR`)
console.log("Ano = ", data.getFullYear());
console.log("Mês = ", data.getMonth() + 1);
console.log("Dia = ", data.getDate());
console.log("Hora = ", data.getHours());
console.log("Minutos = ", data.getMinutes());
console.log("Segundos = ", data.getSeconds());
console.log("Milisegundos = ", data.getMilliseconds());
console.log("Dia da semana = ", data.getDay()); //0 - Domingo, 6 - Sábado


//FORMATANDO DATAS
