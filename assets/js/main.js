const listaPedidos = document.getElementById('lista-pedido');

const totalElemento = document.getElementById('total');

let total = 0;

// Delegação de evento para capturar cliques em botões "adicionar" que podem ser criados dinamicamente
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('adicionar')) {
    const botao = event.target;
    const produto = botao.closest('.produto');
    const nome = produto.querySelector('h3').textContent;
    const preco = parseFloat(produto.querySelector('.preco').textContent.replace("R$", ""));
    const itemPedido = document.createElement('li');
    itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
    listaPedidos.appendChild(itemPedido);
    total += preco;
    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
  }
});

const botaoFinalizarPedido = document.getElementById('finalizar-pedido');

botaoFinalizarPedido.addEventListener("click", () => {
  alert("Pedido finalizado" + totalElemento.textContent);

  listaPedidos.innerHTML = '';

  total = 0;

  totalElemento.textContent = `Total R$ ${total.toFixed(2)}`;
});