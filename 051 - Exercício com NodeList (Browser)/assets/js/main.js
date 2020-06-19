

//const paragrafo = document.querySelector('.paragrafo')

//Capturamos todos os as tags <p></p> a tribuimos na constante "paragrafos"
const paragrafos = document.querySelectorAll('p');

//Captura via DOM todo o corpo do HTML e atribui a constante "estiloBody"
//const estiloBody = getComputedStyle(document.body);

//Capturamos o "backgroundColor" 
const backgroundColorBody = getComputedStyle(document.body).backgroundColor


for (const p of paragrafos) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = "#ffffff"
}