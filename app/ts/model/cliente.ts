class Cliente{

    private _nome: string;
    private _cpf: string;
    private _conta: Conta;
    constructor(nome: string, cpf: string, conta: Conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get getNome(): string{
        return this._nome;
    }
    set setNome(name: string){
        this._nome = name;
    }

    get getCpf(): string{
        return this._cpf;
    }

    get getConta(): Conta{
        return this._conta;
    }

    toString(): string{
        return `- Nome: ${this._nome} \n - Cpf: ${this._cpf} \n - Conta: ${this._conta}`;
    }
}