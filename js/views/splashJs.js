/**
 * Essa constante retorna a URL do App sem nenhum nome de arquivo.
 * A expressão regular /\/[^\/]*$/ captura a barra (/) seguida por qualquer caractere que não seja uma barra zero ou mais vezes até o
 * final da string, que é o nome do arquivo na URL. O método replace() substitui esse trecho da string por uma string vazia, removendo o nome do arquivo da URL.
 * Por exemplo, se a URL atual for https://www.exemplo.com.br/pasta/subpasta/arquivo.html,
 * o valor retornado será https://www.exemplo.com.br/pasta/subpasta.
 * @const {string}
 */

// const urlApp = window.location.href.replace(/\/[^\/]*$/, "");

const intro = document.querySelector('.intro');
const logo = document.querySelector('.logo-header');
const logoSpan = document.querySelectorAll('.logo');
const container = document.getElementById('container_principal');

window.addEventListener('DOMContentLoaded', () => {
    container.hidden = true;
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 800)
        }, 2600);
        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 500)
            })
        }, 3000);
        setTimeout(() => {
            intro.style.top = '-100vh';
            container.hidden = false;
        }, 3020)

    })
    // se splash estiver em pagina separada --------------------------
    // setTimeout(() => {
    //     window.location.href = `${urlApp}/menuPrimario.html`;
    // }, 3099);
})


