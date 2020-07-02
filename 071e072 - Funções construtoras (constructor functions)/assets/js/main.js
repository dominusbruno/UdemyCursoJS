//Criando uma Factory Function (Função que retorna um OBJETO)
function criaCalculadora(){
    this.display = document.querySelector('.display');

    //Método inicia() para "startar" a calculadora
    this.inicia = () => {
        this.clickBotoes()
        this.pressionaEnter()
        this.display.focus()
    };

    //Método que captura o evento de pressionar no "ENTER" e executa o cálculo
    this.pressionaEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13){
                this.realizaConta()
            }
        })
    };

    //Método que executa o cálculo inserido no display
    this.realizaConta = () => {
        let conta = this.display.value

        try { //Testa se a conta é válida (Tem números válidos)
            conta = eval(conta)
            if(!conta){ //Se não existir números inseridos no display apresenta isso
                alert('Conta inválida')
                return
            }
            this.display.value = conta
        } catch (erro) {//Caso tenham sido inseridos valores inválidos, apresenta essa erro.
            alert('Conta inválida')
            return
        }
    };


    //Método que vai capturar o evento/click dos botões
    this.clickBotoes = () => {         
        document.addEventListener('click', e => { //Captura o local do "click" no "document"
            const el = e.target; //Salva o local do "click" na constante "el"

            if (el.classList.contains('btn-num')){//Verifica se o local do "click" contém a classe "btn-num"
                this.btnParaDisplay(el.innerText)//Enviando o valor texto do elemento clickado para o método btnParaDisplay()
            };
            if (el.classList.contains('btn-clear')){//Verifica o click
                this.display.value = '';//Atribui o valor do "display" a ''
            };
            if (el.classList.contains('btn-del')){
                this.display.value = this.display.value.slice(0, -1); //Atribui o valor completo da string(0), e remove apenas o último número inserido(-1)
            };
            if (el.classList.contains('btn-eq')){
                this.realizaConta()
            };

            this.display.focus()//Puxa o foco da calculadora para o "display"

        });
    };

    //Método que envia/acrescenta os comandos ao display
    this.btnParaDisplay = (valor) => {
        this.display.value += valor //Acrescenta o "valor" recebido na função ao atributo/variável display, que esse mostra na "tela" da calculadora.
    }
};


//criaCalculadora().inicia()

const calculadora = new criaCalculadora(); //Atribuindo a função a constante calculadora
calculadora.inicia(); //Chamando o método "inicia()"
