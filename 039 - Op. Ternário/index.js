/*
OPERADORES
   ? :

 MODO DE USAR:
(condição) ? verdadeiro : falso ;
*/


const pontuacaoUsuario = 1500;
const nivelUsuario = (pontuacaoUsuario >= 1000) ? `Usuário VIP` : `Usuário normal`;


const corUsuario = "Azul";
const corPadrao = corUsuario || `Preto`;


console.log(nivelUsuario, corPadrao);