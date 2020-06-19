//Array composto de objetos
const elementos = [
    {tag: 'p', texto: 'Frase 01'},
    {tag: 'div', texto: 'Frase 02'},
    {tag: 'section', texto: 'Frase 03'},
    {tag: 'footer', texto: 'Frase 04'},
];

const container = document.querySelector('.container'); //Seleciona a CLASSE "container"
const div =document.createElement('div'); //Criamos uma DIV que irá receber todos os demais elementos do array


//O FOR vai "varrer" o array e buscar cada um dos seus objetos
for (let i = 0; i < elementos.length; i++) {
    //Pegando os itens do objeto dentro do array
    let {tag, texto} = elementos[i];
    //Criando a variável "tagCriada" com o conteúdo do elemento "tag" de cada um dos indices
    let tagCriada = document.createElement(tag);
    //Inserindo o texto dentro da "tag" recem capturada/criada
    tagCriada.innerHTML = texto;
    //Adicionando as linhas na constante "div" que foi criada apenas para "unificar" os textos do loop
    div.appendChild(tagCriada);
}

//Adicionando todas as "div" que foram "loopeadas" na constante "container" que fará a inserção no HTML
container.appendChild(div)