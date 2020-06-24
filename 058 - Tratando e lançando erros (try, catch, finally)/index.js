/*try {
    console.log('Abri o arquivo')
    console.log('Manipulei o arquivo')
    errando // Erro qualquer
    console.log('Fechei o arquivo') //Será "pulado"
} catch (error) {
    console.log('Tratando o erro')
} finally {
    console.log('FINALLY: Mesmo tendo código errado, Sempre sou executado')
}
*/




//#################################################

function retornaHora(data) {
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date');
    }

    if (!data){
        data = new Date();
    }
    
    // RETORNO DO DADO INSERIDO NA FUNÇÃO
    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try {
const data = new Date ('01-01-1970 12:58:12');
const hora = retornaHora();
console.log(hora);
} catch (error) {
    
}finally{
    console.log('Tenha um bom dia')
}