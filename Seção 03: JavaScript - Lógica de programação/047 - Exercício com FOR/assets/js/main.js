//Array composto de objetos
const elementos = [
    {tag: 'p', texto: 'Frase 01'},
    {tag: 'div', texto: 'Frase 02'},
    {tag: 'section', texto: 'Frase 03'},
    {tag: 'footer', texto: 'Frase 04'},
];

//Declaramos a constante "container" para selecionar a "<section class="container">" do HTML
const container = document.querySelector('.container');

//Declaramos a constante "div" para criar um elemento "<div>" no HTML, aonde ficarão armazenados todos os valores salvos na memoria.
const div =document.createElement('div');


//O FOR vai "varrer" o array e buscar cada um dos seus objetos
for (let i = 0; i < elementos.length; i++) {
    
    //Pegando o conteúdo dos itens "tag" e "texto" do objeto dentro do array por meio da "desestruturação"
    let {tag, texto} = elementos[i];
    
    //Criando a variável "tagCriada" com o conteúdo do elemento "tag" de cada um dos indices
    //EX: "<p></p>" | "<div></div>""
    let tagCriada = document.createElement(tag);

    //Inserindo o conteúdo de "texto" dentro da "tag" recem capturada/criada
    //EX: "<p> Frase 01 </p>"
    tagCriada.innerHTML = texto;

    //Adicionando as linhas na constante "div" que foi criada apenas para "unificar" os textos do loop.
    //EX: "<p> Frase 01 </p><div> Frase 02 </div><section> Frase 03 </section><footer> Frase 04 </footer>"
    div.appendChild(tagCriada);
}


//Utilizando o appendChild para inserir os valores da constante "div" na constante "container"
container.appendChild(div)