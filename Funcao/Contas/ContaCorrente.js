import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas +=1;
    }
    //sobreescreve o comportamento o metodo da classe mãe, o metodo "sacar"
    sacar(valor){
        const taxa = 1.1;
        return this._sacar(valor, taxa);
    } 
}