// RESOLUÇÃO 01
const n1 = 10
const n2 = 5
const n = maior(n1, n2)


function maior(num1, num2) {
    /* UTILIZANDO IF SIMPLES
    if (num1 >num2) {
        const n = num1
        return n
    } else {
        const n = num2
        return n
    }
 */
// UTILIZANDO OPERADOR TERNÁRIO
const n = (num1 >num2) ? num1 : num2
return n
}
console.log (`Entre n1(${n1}) e n2(${n2}), o maior é ${n}`)

//RESOLUÇÃO 02 - SIMPLIFICANDO
//Utilizando array-function

const big = (n1, n2) => n1 > n2 ? n1 : n2;
console.log (`Entre n1(${n1}) e n2(${n2}), o maior é ${big(n1,n2)}`)