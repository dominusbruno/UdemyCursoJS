// Função normal:
    //Utiliza metodos hoisting, aonde é lido primeiro pelo sistema
function funcaoHoisting() {
    console.log("Essa é a função Hoisting | Normal")
}
funcaoHoisting()

//Função sendo captada por uma variável
const funcaoNaVariavel = function () {
    console.log("Essa é a função utilizando uma variávl para captar o resultado")
}
funcaoNaVariavel();

//Função sendo utilizada como parâmetro de outra função
function funcaoComParametroFuncao(parametro) {
    console.log('Vou executar a função "funcaoNaVariavel()" abaixo')
    parametro();
}
funcaoComParametroFuncao(funcaoNaVariavel)

//Função do tipo ARROW FUNCTION
const funcaoArrow = () => {
    console.log("Sou uma ARROW FUNCTION")
}
funcaoArrow()

//Função dentro de um objeto
const objeto ={
    falar(){
        console.log('Função dentro de um objeto')
    }
}
objeto.falar()