class ContaController{
    private inputNumero: HTMLInputElement;
    private inputSaldo: HTMLInputElement;

    private contas: Contas;

    constructor() {
        this.inputNumero = <HTMLInputElement>document.querySelector('#conta');
        this.inputSaldo = <HTMLInputElement>document.querySelector('#saldo');
        this.contas = new Contas();
    }

    listar() {
        this.contas.listar().forEach(conta => this.inserirContaNoHtml(conta));
    }

    inserir(evento: Event): void{
        evento.preventDefault();
        const novaConta = new Conta(this.inputNumero.value, parseFloat(this.inputSaldo.value));
        this.contas.inserir(novaConta);
        this.inserirContaNoHtml(novaConta);

    }

    private inserirContaNoHtml(conta: Conta): void{
        const elementoP = document.createElement('p');
        elementoP.textContent = conta.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event: MouseEvent)=>{
            this.contas.remover(conta.numero);
            (<Element>event.target).parentElement.remove();
        })

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);

    }

}