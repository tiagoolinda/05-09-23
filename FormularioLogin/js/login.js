/* Criando o evento do botão */
document.getElementById('botaoEntrar')
    .addEventListener('click', (e) => {
        e.preventDefault();
    });

    document.getElementById('botaoCadastro')
    .addEventListener('click', (e)=>{
        e.preventDefault();
        window.open("../assets/cadastroUsuarios.html")
        window.close();
    });

function verificar() {
    /* pegando os valores do input email e senha */
    let email = document.getElementById('username').value;
    let senha = document.getElementById('password').value;

    if (email == "" || senha == "") {
        alert("Obrigatório o preenchimento do email e senha");
        document.getElementById('username').focus();
    } else {
        consultar(email, senha);
    }
}

function consultar(email, senha) {
    let usuarios = new Array(); /* Aqui estamos definindo uma matriz */
    /* Verificando se a chave usuario existe no localStorage */
    if (localStorage.hasOwnProperty())
        /* Recuperar os valores da propriedade usuarios do localStorage */
        /* COnvertendo o USUARIO em objeto para podermos usar as propriedades */

        usuarios = JSON.parse(localStorage.getItem('usuarios'))/* parse = converter */
}
for (let i = 0; i < usuarios.lenght; i++) {
    if (usuarios[i].email == email && usuario[i].senha == senha) {
        window.open("../assets/index.html");
        window.close();
        break;
    }

    alert("Email ou senha inválido");
    document.getElementById('username').focus();
}