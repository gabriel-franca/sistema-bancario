class ContaController {
    constructor() {
        this.inputNumero = document.querySelector('#conta');
        this.inputSaldo = document.querySelector('#saldo');
        this.contas = new Contas();
    }
    listar() {
        this.contas.listar().forEach(conta => this.inserirContaNoHtml(conta));
    }
    inserir(evento) {
        evento.preventDefault();
        const novaConta = new Conta(this.inputNumero.value, parseFloat(this.inputSaldo.value));
        this.contas.inserir(novaConta);
        this.inserirContaNoHtml(novaConta);
    }
    inserirContaNoHtml(conta) {
        const elementoP = document.createElement('p');
        elementoP.textContent = conta.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            this.contas.remover(conta.numero);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
