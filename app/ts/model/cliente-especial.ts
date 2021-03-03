class ClienteEspecial extends Cliente{

    private dependentes: Array<Cliente>;
    constructor(nome: string, cpf: string, conta: Conta) {
        super(nome, cpf, conta);
        this.dependentes = new Array<Cliente>();
    }
}