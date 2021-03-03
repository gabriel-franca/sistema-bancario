class Cliente {
    constructor(nome, cpf, conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }
    get getNome() {
        return this._nome;
    }
    set setNome(name) {
        this._nome = name;
    }
    get getCpf() {
        return this._cpf;
    }
    get getConta() {
        return this._conta;
    }
    toString() {
        return `- Nome: ${this._nome} \n - Cpf: ${this._cpf} \n - Conta: ${this._conta}`;
    }
}
