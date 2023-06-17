// Função para carregar os modais a partir de "modais.html"
function carregarModais(event) {
  event.preventDefault();
  fetch("modais.html")
    .then((response) => response.text())
    .then((content) => {
      const modalContainer = document.getElementById("modalContainer");
      modalContainer.innerHTML = content;
    })
    .catch((error) =>
      console.log("Ocorreu um erro ao carregar os modais:", error)
    );
}

// Função para abrir o modal e preencher os dados
function abrirModal(event, modalId) {
  event.preventDefault();
  const modalElement = document.getElementById(modalId);

  if (modalElement) {
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
    console.log("Modal aberto");
  }
}
function fechaModal() {
    const modalElement = document.getElementById("modal2");

    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      setTimeout(function () {
        modal.hide();
        console.log("Modal fechado");
      }, 2500);
    }
    else{
        console.log("Não foi possível fechar o modal", errorMessage);
    }

}

// Chama a função para carregar os modais quando a página carregar
window.addEventListener("DOMContentLoaded", carregarModais);

// // Função para abrir o modal e preencher os dados ---------------------
// function abrirModal(titulo, paragrafo1, small1, paragrafo2, small2, subtitulo) {
//     const modalTitle = document.getElementById('modal1Label');
//     const modalParagraph1 = document.getElementById('descricao');
//     const modalSmall1 = document.getElementById('servePessoa');
//     const modalParagraph2 = document.getElementById('precoProduto');
//     // const modalSmall2 = document.getElementById('modalSmall2');
//     // const modalSubtitle = document.getElementById('modalSubtitle');

//     modalTitle.innerText = titulo;
//     modalParagraph1.innerText = paragrafo1;
//     modalSmall1.innerText = small1;
//     modalParagraph2.innerText = paragrafo2;
//     // modalSmall2.innerText = small2;
//     // modalSubtitle.innerText = subtitulo;

//     // Abre o modal usando o ID
//     const modal = new bootstrap.Modal(document.getElementById('myModal'));
//     modal.show();
//   }

//   // Evento de clique no botão
//   const button = document.querySelector('.buttons button');
//   button.addEventListener('click', function() {
//     // Chama a função abrirModal com os dados desejados
//     abrirModal('Título do Modal', 'Primeiro parágrafo', 'Texto pequeno', 'Segundo parágrafo', 'Outro texto pequeno', 'Subtítulo');
//   });
