// Todos os elementos que serão utilizados devem ser "transformados" em constantes para facilitar o código
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');



//Captura o click no botão ENTER
inputTarefa.addEventListener('keypress', function (e) { 
    if (e.keyCode === 13){ //
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
    }
})

//Cria um elemento LISTA no HTML
function criaLi() {
    const li = document.createElement('li');
    return li;
}

//Função que cria o botão apagar de cada uma das tarefas
function criaBotaoApagar(li){
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'Apagar');
    li.appendChild(botaoApagar);
}


//Função para limpar o input e dar foco do mouse
function limpaInput(e) {
    inputTarefa.value = ""; //Limpa o campo
    inputTarefa.focus(); //Coloca o mouse em foco
}


//Função para criar a tarefa
function criaTarefa(textoInput) {
    const li = criaLi(); //Chama a função criaLi para criar um "topico": <li></li>
    li.innerHTML = textoInput; //Insere o texto/html recebido dentro do topico criado: <li>textorecebido</li>
    tarefas.appendChild(li); //Utiliza a constante "tarefa" para inserir "<li>textorecebido</li>" no HTML.
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

//Captura o evento click do botão "enter"
btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return; //Não retorna nada em caso do campo estar zerado
    criaTarefa(inputTarefa.value); //Pega o valor de dentro do inputTarefa e joga na função criaTarefa()
});

//Captura o click do botão apagar da tarefa e apaga o o elemento "pai"
document.addEventListener('click', function(e){
    const el = e.target; //Salva o elemento clickado em uma constante
    if (el.classList.contains('Apagar')) { //Verifica se o valor salvo contém a "class = apagar"
        el.parentElement.remove(); //Apaga o elemento pai/consequentemente, se apaga.
        salvarTarefas();
    }
});

//Função que fará o tratamento e salvará as tarefas
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li') // Captura todos os elementos <li>
    const listaDeTarefas = [] //Cria um array para salvar os dados depois de tratados

    for (let i of liTarefas) { //Varre todos os valores contidos em "liTarefas"
        let tarefaTexto = i.innerText; //joga tudo na variável "tarefaTexto"
        tarefaTexto = tarefaTexto.replace('Apagar', ''); //Apaga os valores "Apagar" da captura
        tarefaTexto = tarefaTexto.trim(); //Apagar valores em branco antes de pois do texto
        listaDeTarefas.push(tarefaTexto); //Acrescenta o valor "tarefaTexto" ao final do array "listaDeTarefas"
    }

    //Capturando o array "listaDeTarefas", comnvertendo para JSON e atribuiindo a uma constante(tarefaJSON)
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    
    //Salvando em uma cache do navegador utilizando localStorage
    //Definindo um nome(tarefas) para a base criada
    localStorage.setItem('tarefas', tarefasJSON)
}

//Função para puxar da base(tarefas) JSON os itens salvos
function adicionarTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas'); //Captura a base do JSON e joga em uma constante
    const listaDeTarefas = JSON.parse(tarefas); //Converte a captura anterior de string para array e salva em uma constante
    
    for (const i of listaDeTarefas) {
        criaTarefa(i)
    }
    
    
}
adicionarTarefasSalvas()