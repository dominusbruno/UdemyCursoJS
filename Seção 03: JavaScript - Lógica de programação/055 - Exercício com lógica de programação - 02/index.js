/*function ePaisagem(largura, altura) {
    return largura > altura
}

console.log(ePaisagem(1920, 1080))
*/


const ePaisagem = (largura, altura) => largura > altura ? true : false;

console.log(ePaisagem(1920, 1080)) // true
console.log(ePaisagem(1080, 1920)) // false
console.log(ePaisagem(1920, 1920)) // false
