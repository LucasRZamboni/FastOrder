const urlApp = window.location.href.replace(/\/[^\/]*$/, '');
function login() {
    window.location.href = `${urlApp}/home.html`;
}
