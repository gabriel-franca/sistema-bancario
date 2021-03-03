class ContaBonificada extends Conta{

    private TAXA = 1.1;
    constructor(numero: string, saldoInicial = 0){
        super(numero, saldoInicial);
    }

    creditar(valor: number): void{
        super.creditar(valor * this.TAXA);
    }
}