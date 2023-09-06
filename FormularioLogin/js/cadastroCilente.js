/* Pegando os valores dos Inputs */

let botaoCad = document.getElementById('botaoCadastrar');
let botaoCons = document.getElementById('botaoConsultar');
let botaoDel = document.getElementById('botaoDeletar');
let botaoUp = document.getElementById('botaoAtualizar');

const asta = ()=>{

}

botaoCad.addEventListener('click', (e) => {
    e.preventDefault();

    if (document.getElementById('nome').value != '' &&
        document.getElementById('cep').value != "" &&
        document.getElementById('email').value != "") {
        cadastro()
    }
    else {
        alert("Preencha os dados")
        document.getElementById('nome').focus()
    }
}
)

