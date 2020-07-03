//Criando uma Factory Function (Função que retorna um OBJETO)
function criaCalculadora(){
    return{ //Retorno = Objeto a ser criado
        display: document.querySelector('.display'),//Atributos/variáveis (podem ser acessados com o método "this")

        //Método inicia() para "startar" a calculadora
        inicia(){
            this.clickBotoes(); //Chamando o objeto "calculadora" (mesmo que "calculadora.clickBotoes()")
            this.pressionaEnter();
        },

        //Método qu ecaputa o evento de pressionar no "ENTER" e executa o cálculo
        pressionaEnter(){
            this.display.addEventListener('keypress', function(evento){
                if (evento.keyCode === 13){
                    this.realizaConta();
                }
            }.bind(this));//BIND para não perder o THIS da função
        },

        //Método que executa o cálculo inserido no display
        realizaConta(){
            let conta = this.display.value; //Atribui o valor do display a uma variável

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
        },


        //Método que vai capturar o evento/click dos botões
        clickBotoes(){         
            document.addEventListener('click', function(evento){ //Captura o local do "click" no "document"
                const el = evento.target; //Salva o local do "click" na constante "el"

                if (el.classList.contains('btn-num')){//Verifica se o local do "click" contém a classe "btn-num"
                    this.btnParaDisplay(el.innerText);//Enviando o valor texto do elemento clickado para o método btnParaDisplay()
                }
                if (el.classList.contains('btn-clear')){//Verifica o click
                    this.display.value = '';//Atribui o valor do "display" a ''
                }
                if (el.classList.contains('btn-del')){
                    this.display.value = this.display.value.slice(0, -1); //Atribui o valor completo da string(0), e remove apenas o último número inserido(-1)
                }
                if (el.classList.contains('btn-eq')){
                    this.realizaConta()
                }

                this.display.focus()//Puxa o foco da calculadora para o "display"

            }.bind(this)); //O this(calculadora) se perde devido ao uso de outra função(evento) neste método, dessa maneira estaremos informando que o "this" desta função(evento) deve ser ignorado, prevalecendo o "this" da função anterior(calculadora)
        },

        //Método que envia/acrescenta os comandos ao display
        btnParaDisplay(valor){
            this.display.value += valor; //Acrescenta o "valor" recebido na função ao atributo/variável display, que esse mostra na "tela" da calculadora.
        }
    };
}


//criaCalculadora().inicia()

const calculadora = criaCalculadora(); //Atribuindo a função a constante calculadora
calculadora.inicia(); //Chamando o método "inicia()"
