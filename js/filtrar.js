var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");
    for (var index = 0; index < pacientes.length; index++) {
        var paciente = pacientes[index];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        
    }
});