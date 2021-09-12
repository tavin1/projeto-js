/* adicionado clientes e usuários a um formulário em forma de tabela, para melhor organização*/



var botaoAdd = document.querySelector("#cadastrar-usuario");
botaoAdd.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#cadastrar");

    var nome    = form.nome.value;
    var cpf     = form.cpf.value;
    var conta   = form.conta.value;
    var tipo    = form.tipoConta.value;
    var funcao  = form.funcao.value;

    
    var usuarioTr = document.createElement("tr");// criando mais uma tabela e add o usuario

    var nomeTd   = document.createElement("td");
    var cpfTd    = document.createElement("td");
    var ContaTd  = document.createElement("td");
    var tipoTd   = document.createElement("td");
    var funcaoTd = document.createElement("td");

    nomeTd.textContent   = nome;
    cpfTd.textContent    = cpf;
    ContaTd.textContent  = conta;
    tipoTd.textContent   = tipo;
    funcaoTd.textContent = funcao;
    
    
    usuarioTr.appendChild(nomeTd);
    usuarioTr.appendChild(cpfTd);
    usuarioTr.appendChild(ContaTd);
    usuarioTr.appendChild(tipoTd);
    usuarioTr.appendChild(funcaoTd);
    
    var tabela = document.querySelector("#tabela-usuarios")
    tabela.appendChild(usuarioTr);
    form.reset();
})