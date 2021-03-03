class ClienteController{

    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputNumero: HTMLInputElement;
    private inputSaldo: HTMLInputElement;

    private clientes: Clientes;
    constructor() {
        this.inputNome = <HTMLInputElement>document.querySelector('#nome');
        this.inputCpf = <HTMLInputElement>document.querySelector('#cpf');
        this.inputNumero = <HTMLInputElement>document.querySelector('#numero');
        this.inputSaldo = <HTMLInputElement>document.querySelector('#saldo');

        this.clientes = new Clientes;
    }

    listar(){
        this.clientes.listar().forEach(cliente => this.inserirClienteNoHTML(cliente));
    }

    inserir(evento: Event): void{
        evento.preventDefault();
        const newCliente = new Cliente(this.inputNome.value, this.inputCpf.value,
                                new Conta(this.inputNumero.value, parseFloat(this.inputSaldo.value)));
        this.inserirClienteNoHTML(newCliente);
    }

    inserirClienteNoHTML(cliente: Cliente): void{
        const paragrafo = document.createElement('p');
        paragrafo.textContent = cliente.toString();
        const btnCancelar = document.createElement('button');
        btnCancelar.textContent = 'X';
        //remover conta ao clicar no button X
        btnCancelar.addEventListener( 'click', (event:MouseEvent) => {
            this.clientes.remover(cliente.getCpf);
            (<Element>event.target).parentElement.remove();
        })
        paragrafo.appendChild(btnCancelar);
        document.body.appendChild(paragrafo);
    }

}