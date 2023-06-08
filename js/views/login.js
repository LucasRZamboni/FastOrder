document.addEventListener('DOMContentLoaded', function () {
    //Atalhos para os elementos DOM  - Document Object Model
    const formLogin = document.getElementById('formLogin')
    const botaoGoogle = document.getElementById('btnLoginGoogle')


    //Adicionamos um listener em cada item
    formLogin.addEventListener('submit', (event) => {
        event.preventDefault() //evita recarregar a página   
        const email = document.getElementById('emailLogin').value
        const senha = document.getElementById('senhaLogin').value
        loginFirebase(email, senha)
        console.log("carregando")
    })

    //listener botão Google
    botaoGoogle.addEventListener('click', (event) => {
        event.preventDefault() //Não recarrega a página
        loginGoogle()
    })
});