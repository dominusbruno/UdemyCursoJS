// FUNÇÃO GERADORA BÁSICA
function* geradora1() {
    //Bloco de códigos
    yield 'Valor 1'
    //Bloco de códigos
    yield 'Valor 2'
    //Bloco de códigos
    yield 'Valor 3'
    //Bloco de códigos
    yield 'Valor 4'
    //Bloco de códigos
    yield 'Valor 5'
}

const x = geradora1();
for (const i of geradora1()) {
    console.log(i);
}


console.log("============================================");
// FUNÇÃO GERADORA INFINITA (CRIA VALORES QUANDO INVOCADAS)
function* geradora2() {
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value); //0
console.log(g2.next().value); //1
console.log(g2.next().value); //2
console.log(g2.next().value); //3
console.log(g2.next().value); //4
console.log(g2.next().value); //5


console.log("============================================");
//FUNÇÃO GERADORA QUE COMPLEMENTA/UTILIZA OUTRA FUNÇÃO GERADORA
function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (const i of g4) {
    console.log(i)
    
}

console.log("============================================");
//FUNÇÃO GERADORA QUE COMPLEMENTA/UTILIZA OUTRA FUNÇÃO GERADORA
function* geradora5(){
    yield function () {
        console.log('Vim do yield 1');
    };
    
    yield function () {
        console.log('Vim do yield 2');
    };
}

const g5 = geradora5();

const funcao1 = g5.next().value;
const funcao2 = g5.next().value;

funcao1();
funcao2();