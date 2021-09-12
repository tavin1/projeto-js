
//calcula imc
//Alura!!!

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
titulo.addEventListener("click", function(){ // <--- função anonima
    console.log("olá, eu fui clicado");
});//função para add um evento de clique

var pacientes = document.querySelectorAll(".paciente"); // passar por todos os pacientes, trazendo uma array

for(var i = 0; i < pacientes.length; i++){
 
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido   = validaPeso(peso);
    var alturaValida = validaAltura(altura);

        if(!pesoValido){
            console.log("peso inválido");
            pesoValido = false;
            tdImc.textContent = "Peso Inválido!";
            paciente.classList.add("paciente-invalido");
        } 
        if(!alturaValida){
            console.log("altura inválido");
            alturaValida = false;
            tdImc.textContent = "Altura Inválida!";
            paciente.classList.add("paciente-invalido");
        }
        if(alturaValida && pesoValido){
            var imc = calculaImc(peso, altura);
        } 
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }
    else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >=0 && altura <= 3.0){
        return true;
    }
    else{
        return false;
    }
}


