function abrirAdd() {
    const btnAdicionar = document.getElementById("btnAdicionar");
    const quantidadePedidosSpan = document.getElementById("qtdPedidos");
  
    let qtdPedidos = 0;
  
    btnAdicionar.addEventListener("click", function() {
      qtdPedidos++;
      quantidadePedidosSpan.textContent = qtdPedidos.toString();
      alerta(`✅ | Pedido adiconado com sucesso.`,"success");
    });
  }


