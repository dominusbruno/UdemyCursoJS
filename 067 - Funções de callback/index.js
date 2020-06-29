function rand(min = 1000, max = 5000) {
    const time = Math.random() * (max - min) + min;
    return Math.floor(time);
  }

//const time = inteiroRand()


function f1(callback) {
    setTimeout(function() {
        console.log(`F1 em ${rand()} milisegundos`)
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
        console.log(`F2 em ${rand()} milisegundos`)
        if (callback) callback();
    }, rand());
}
function f3(callback) {
    setTimeout(function() {
        console.log(`F3 em ${rand()} milisegundos`)
        if (callback) callback();
    }, rand());
}

//SEM CALLBACKS AS FUNÇÕES EXECUTAM DE FORMA ALEATÓRIQ
/*
f1()
f2()
f3()
console.log('Olá Mundo!')
*/


//COM CALLBACKS AS FUNÇÕES SÃO EXECUTADAS EM ORDEM

f1(f1Callback);

function f1Callback() {
    f2(f2CallBack);
}
function f2CallBack() {
    f3(f3CallBack);
}
function f3CallBack() {
    console.log('Olá Mundo!')
}