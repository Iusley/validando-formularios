import ehUmCPF from "./valida-cpf.js"
import ehMaiorDeidade from "./valida-idade.js";


     // Suponha que você tenha definido um setTimeout anteriormente
     var timeoutID = setTimeout(function() {
        location.reload();
    }, 5000);

    // Desativar o auto refresh automaticamente ao carregar a página
    clearTimeout(timeoutID);

const camposDoFormulario = document.querySelectorAll('[required]')
console.log(camposDoFormulario)

camposDoFormulario.forEach ((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo))
    campo.addEventListener('invalid', evento => evento.preventDefault())
})

function verificaCampo(campo) {
    if(campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo)
    }

    if(campo.name == "aniversario" && campo.value != "") {
        ehMaiorDeidade(campo)
    }

    console.log(campo.validity)
}