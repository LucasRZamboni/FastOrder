
// Atalhos para os elementos DOM - Document Object Model
const formCadastro = document.getElementById('formCadastro')

//Adiciona um Listener no formulário
formCadastro.addEventListener('submit', (event) => {
    const email = document.getElementById('emailCadastro').value
    const senha = document.getElementById('senhaCadastro').value
    event.preventDefault()
    novoUsuario(email, senha)
}
)