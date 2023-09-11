export default function ehMaiorDeidade(campo) {
    const datanascimento = new Date(campo.value)
    validaIdade(datanascimento)
    console.log(validaIdade(datanascimento))
}

function validaIdade(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear()+18, data.getUTCMonth(), data.getUTCDate())
    return dataAtual >= dataMais18
}