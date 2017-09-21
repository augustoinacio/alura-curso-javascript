var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    var tdImc = paciente.querySelector(".info-imc");
    
    
    if(peso < 0 || peso >= 1000 ){
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        console.log("Peso invalido");
        paciente.classList.add(paciente-invalido);
    }
    if(altura < 0 || altura >= 3 ){
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida";
        console.log("Altura inválida");
        paciente.classList.add(paciente-invalido);
    }
    console.log(pesoEhValido);
    console.log(alturaEhValida);
    if(pesoEhValido && alturaEhValida){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
    console.log(imc);
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function() {
    console.log("Oi, cliquei no botão.");
});
    