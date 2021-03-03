class Clientes{

    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
        const cl1 = new Cliente('Rodrigo', '111', new Conta('13', 1000));
        const cl2 = new Cliente('Rafael', '222', new Conta('14', 2000));
        const cl3 = new Cliente('Karol', '333', new Conta('14', 3000));
        this.clientes.push(cl1, cl2, cl3);
    }
    inserir(newCliente: Cliente): void{
        this.clientes.push(newCliente);
    }

    remover(cpf: string): void{
        const removerCliente = this.pesquisar(cpf);
        if(removerCliente){
            const removerPeloIndice = this.clientes.indexOf(removerCliente);
            if(removerPeloIndice > -1){
                this.clientes.splice(removerPeloIndice, 1);
            }
        }
    }

    listar(): Array<Cliente>{
        return this.clientes;
    }

    pesquisar(cpf: string): Cliente{
        return this.clientes.find(paraCadaCliente => paraCadaCliente.getCpf === cpf);
    }
}