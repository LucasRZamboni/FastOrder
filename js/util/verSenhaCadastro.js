const verSenhaButton2 = document.getElementById("verSenhaCadastro");
const senhaCadastro = document.getElementById("senhaCadastro");
const iconeSenhaCadastro = document.getElementById("iconeSenhaCadastro");

verSenhaButton2.addEventListener("click", function () {
    if (senhaCadastro.type === "password") {
        senhaCadastro.type = "text";
        iconeSenhaCadastro.classList.remove("bi-eye-fill");
        iconeSenhaCadastro.classList.add("bi-eye-slash-fill");
    } else {
        senhaCadastro.type = "password";
        iconeSenhaCadastro.classList.remove("bi-eye-slash-fill");
        iconeSenhaCadastro.classList.add("bi-eye-fill");
    }
});