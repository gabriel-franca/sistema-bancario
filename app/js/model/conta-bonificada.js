class ContaBonificada extends Conta {
    constructor(numero, saldoInicial = 0) {
        super(numero, saldoInicial);
        this.TAXA = 1.1;
    }
    creditar(valor) {
        super.creditar(valor * this.TAXA);
    }
}
