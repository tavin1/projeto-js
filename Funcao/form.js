
//criação do formulário
//Alura!!!

var botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function(event){
    event.preventDefault();
    
    var form       = document.querySelector("#form-add");
    var paciente   = pacienteFormulario(form);
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagemErro(erros);
        return;
    }

    // add os pacientes e colocando na tabela 
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr);
    form.reset();
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML ="";
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}


function pacienteFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
        
    }

    return paciente;
}


function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente"); //add uma classe a minha tabela criada
    
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){

    var erros = [];
    if(!validaPeso(paciente.peso)){
        erros.push("Peso é invalido!");
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida!");
    }
    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }
    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }
    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }
    if(paciente.gordura.length == 0){
        erros.push("A Gordura não pode ser em branco");
    }
    return erros;
}

function exibeMensagemErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = ""; //permite eu controlar e zerar as mensagens
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}