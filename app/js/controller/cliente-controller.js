class ClienteController {
    constructor() {
        this.inputNome = document.querySelector('#nome');
        this.inputCpf = document.querySelector('#cpf');
        this.inputNumero = document.querySelector('#numero');
        this.inputSaldo = document.querySelector('#saldo');
        this.clientes = new Clientes;
    }
    listar() {
        this.clientes.listar().forEach(cliente => this.inserirClienteNoHTML(cliente));
    }
    inserir(evento) {
        evento.preventDefault();
        const newCliente = new Cliente(this.inputNome.value, this.inputCpf.value, new Conta(this.inputNumero.value, parseFloat(this.inputSaldo.value)));
        this.inserirClienteNoHTML(newCliente);
    }
    inserirClienteNoHTML(cliente) {
        const paragrafo = document.createElement('p');
        paragrafo.textContent = cliente.toString();
        const btnCancelar = document.createElement('button');
        btnCancelar.textContent = 'X';
        //remover conta ao clicar no button X
        btnCancelar.addEventListener('click', (event) => {
            this.clientes.remover(cliente.getCpf);
            event.target.parentElement.remove();
        });
        paragrafo.appendChild(btnCancelar);
        document.body.appendChild(paragrafo);
    }
}
