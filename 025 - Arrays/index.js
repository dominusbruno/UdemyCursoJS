//Declarando um array com 3 elementos
const alunos = ['Luiz', 'Maria', 'João', 'Fernanda', 'Juliano'];
const alunos_inicial = alunos;

//Mostra todos os elementos do array
console.log(`O array completo é formado por: ${alunos}`);

// Mostra o elemento alocado no indice 2 do array
console.log(`${alunos[2]} é o elemento do indice 2 do array: ${alunos}`);

//Substituindo e inserindo elementos dentro de um array

let sai = alunos[1]
alunos[1] = 'Eduardo';//Substituindo MARIA por EDUARDO
alunos[3] = 'Sofia';//Inserindo
console.log(`Substituindo a ${sai} por ${alunos[1]} e inserindo a ${alunos[3]}; ${alunos_inicial}`);

// Indentificando o tamanho do array 
console.log(`Nosso array tem atualmente ${alunos.length} elementos`);

//Inserindo elementos no início e final do array
alunos.unshift('Caroline'); //Insere um elemento no início do array
console.log(`Inserindo elemento ao início do array: ${alunos}`);
alunos.push('João'); //Insere um elemento no final do array
console.log(`Inserindo elemento ao final do array: ${alunos}`);

//Removendo elementos do início, final ou específico do array
delete alunos_inicial[2];//Removendo o elemento do indice 2
alunos.shift(); //Remove o primeiro
alunos.pop(); //Remove o último
console.log(`Array sem o 2º, último e primeiro elementos: ${alunos}`);

//Alocando os elementos removidos nos comandos .pop() e .shift() em uma variável
let removido_ultimo = alunos.pop();
let removido_primeiro = alunos.shift();
console.log(`O primeiro elemento removido foi o ${removido_primeiro}`);
console.log(`O último elemento removido foi o ${removido_ultimo}`);
console.log(`Agora o array ficou assim: ${alunos}`);