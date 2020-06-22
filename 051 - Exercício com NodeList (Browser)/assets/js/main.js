

//const paragrafo = document.querySelector('.paragrafo')

//Capturamos todos os as tags <p></p> e atribuimos na constante "paragrafos"
const paragrafos = document.querySelectorAll('p');

//Captura via DOM todo o corpo do HTML e atribui a constante "estiloBody"
//const estiloBody = getComputedStyle(document.body);

//Capturamos o "backgroundColor" e atribuimos a constante "backgroundColorBody"
const backgroundColorBody = getComputedStyle(document.body).backgroundColor


//Varre os indices(i) de "paragrafos" alterando as cores de fundo e textode cada um deles
for (const i of paragrafos) {
    i.style.backgroundColor = backgroundColorBody;
    i.style.color = "#ffffff"
}