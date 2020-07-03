const calculadora = new modeloCalculadora(); //Atribuindo a função a constante calculadora
calculadora.inicia(); //Chamando o método "inicia()"

function modeloCalculadora(){
    this.display = document.querySelector('.display');

    //Método inicia() para "startar" a calculadora
    this.inicia = () => {
        this.capturaCliques()
        this.pressionaEnter()
        this.display.focus()
    };

    //Método que vai capturar o evento/click dos botões executando rotinas ou outros
    this.capturaCliques = () => {         
        document.addEventListener('click', event => {
            const el = event.target;

            if (el.classList.contains('btn-num')) this.addNumDisplay(el)
            if (el.classList.contains('btn-clear')) this.clear()
            if (el.classList.contains('btn-del')) this.del()
            if (el.classList.contains('btn-eq')) this.realizaConta()

            this.display.focus()
        });
    };
    
    //Método que executa o cálculo inserido no display
    this.realizaConta = () => {
        let conta = eval(this.display.value)

        try { //Testa se a conta é válida (Tem números válidos)
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

    //Método que envia/acrescenta os comandos ao display
    this.addNumDisplay = el => this.display.value += el.innerText

    //Método do botão C, limpar o display.
    this.clear = el => this.display.value = ''

    //Método que remove o último número/tecla digitado (backspace)
    this.del = el => this.display.value = this.display.value.slice(0,-1)

    //Método que captura o evento de pressionar no "ENTER" e executa o cálculo
    this.pressionaEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13){
                this.realizaConta()
            }
        })
    };

};