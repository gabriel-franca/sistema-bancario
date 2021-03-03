class Contas{
    private contas: Array<Conta>;

    constructor() {
        this.contas = new Array<Conta>();
        const c1 = new Conta('1', 100);
        const c2 = new Conta('2', 200);
        const cb1 = new Conta('3', 300);
        this.contas.push(c1, c2, cb1);
    }

    listar(): Array<Conta>{
        return this.contas;
    }
    inserir(novaConta: Conta): void{
        this.contas.push(novaConta);
    }
    pesquisar(numero: string): Conta{
        return this.contas.find(conta => conta.numero === numero);
    }
    remover(numero: string): void{
        const contaARemover = this.pesquisar(numero);
        if(contaARemover){
            const indiceConta = this.contas.indexOf(contaARemover);
            if(indiceConta > -1){
                this.contas.splice(indiceConta, 1);
            }
        }
    }

}