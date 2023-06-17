const verSenhaButton = document.getElementById("verSenhaLogin");
const senhaLogin = document.getElementById("senhaLogin");
const iconeSenhaLogin = document.getElementById("iconeSenhaLogin");

verSenhaButton.addEventListener("click", function () {
    if (senhaLogin.type === "password") {
        senhaLogin.type = "text";
        iconeSenhaLogin.classList.remove("bi-eye-fill");
        iconeSenhaLogin.classList.add("bi-eye-slash-fill");
    } else {
        senhaLogin.type = "password";
        iconeSenhaLogin.classList.remove("bi-eye-slash-fill");
        iconeSenhaLogin.classList.add("bi-eye-fill");
    }
});