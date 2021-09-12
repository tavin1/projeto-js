//Classe abstrata

export class Conta{
    constructor(saldoInicial,cliente, agencia){
        
        if(this.constructor == Conta){
            throw new Error("Comando não permitido. Você não deveria estar instanciando um objeto do tipo conta, pois ela é uma classe abstrata!");
        }
        
        this._saldo   = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente)
        this._cliente = novoValor;
    } 


    get cliente(){
        return this.cliente;
    }

    get saldo(){
        return this.saldo;
    }


    sacar(valor){ //Método abstrato
            throw new Error("O método sacar da conta é abstrato!");
        }        
    
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        } 
        
        return 0;
    }

    depositar(valor){
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}