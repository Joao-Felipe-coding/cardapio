const listaPedidos = document.getElementById('lista-pedido');

const totalElemento = document.getElementById('total');

let total = 0;

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('adicionar')) {
    const botao = event.target;
    const produto = botao.closest('.produto');
    const nome = produto.querySelector('h3').textContent;
    const preco = Number.parseFloat(produto.querySelector('.preco').textContent.replace("R$", ""));
    const itemPedido = document.createElement('li');
    itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
    listaPedidos.appendChild(itemPedido);
    total += preco;
    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
    atualizarVisibilidadeLimpar();
    // Exibe popup de confirmação
    mostrarPopupAdicionado(nome);
  }
});

const botaoFinalizarPedido = document.getElementById('finalizar-pedido');

// Botão para limpar todos os pedidos
const botaoLimparPedidos = document.getElementById('limpar-pedidos');
function atualizarVisibilidadeLimpar() {
  botaoLimparPedidos.style.display = listaPedidos.children.length > 0 ? 'inline-block' : 'none';
}
botaoLimparPedidos.addEventListener('click', () => {
  listaPedidos.innerHTML = '';
  total = 0;
  totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
  atualizarVisibilidadeLimpar();
});
// Chama ao carregar
atualizarVisibilidadeLimpar();

// Função para juntar os valores dos inputs do código da mesa
function getCodigoMesa() {
  const c1 = document.getElementById('codigo-mesa-1').value.trim();
  const c2 = document.getElementById('codigo-mesa-2').value.trim();
  const c3 = document.getElementById('codigo-mesa-3').value.trim();
  const c4 = document.getElementById('codigo-mesa-4').value.trim();
  return `${c1}${c2}-${c3}${c4}`;
}

// Avanço automático entre inputs
['codigo-mesa-1','codigo-mesa-2','codigo-mesa-3','codigo-mesa-4'].forEach((id, idx, arr) => {
  const input = document.getElementById(id);
  input.addEventListener('input', (e) => {
    if (e.target.value.length === 1 && idx < arr.length - 1) {
      document.getElementById(arr[idx+1]).focus();
    }
    // Volta para o anterior se apagar
    if (e.inputType === 'deleteContentBackward' && e.target.value.length === 0 && idx > 0) {
      document.getElementById(arr[idx-1]).focus();
    }
  });
});

botaoFinalizarPedido.addEventListener("click", () => {
  const erroCodigoMesa = document.getElementById('erro-codigo-mesa');
  const codigo = getCodigoMesa();
  // Lista de códigos válidos
  const codigosValidos = [""];
  // Regex para garantir o formato XX-XX
  const regex = /^\w{2}-\w{2}$/;
  if (!regex.test(codigo) || !codigosValidos.includes(codigo)) {
    erroCodigoMesa.textContent = 'Informe um código de mesa válido.';
    erroCodigoMesa.style.display = 'inline';
    document.getElementById('codigo-mesa-1').focus();
    return;
  }
  erroCodigoMesa.textContent = '';
  erroCodigoMesa.style.display = 'none';
  alert(`Pedido finalizado ${totalElemento.textContent} | Mesa: ${codigo}`);
  listaPedidos.innerHTML = '';
  total = 0;
  totalElemento.textContent = `Total R$ ${total.toFixed(2)}`;
  // Limpa os campos
  document.getElementById('codigo-mesa-1').value = '';
  document.getElementById('codigo-mesa-2').value = '';
  document.getElementById('codigo-mesa-3').value = '';
  document.getElementById('codigo-mesa-4').value = '';
});

// Função para mostrar popup de confirmação
function mostrarPopupAdicionado(nomeProduto) {
  const container = document.getElementById('popup-container');
  if (!container) return;
  const popup = document.createElement('div');
  popup.className = 'popup-adicionado';
  popup.innerHTML = `
    <svg viewBox="0 0 24 24"><path d="M9.5 17.5l-5-5 1.41-1.41L9.5 14.67l8.59-8.59L19.5 7.5z"/></svg>
    <span>\"${nomeProduto.replace(/"/g, '&quot;')}\" adicionado aos pedidos!</span>
  `;
  container.appendChild(popup);
  // Remove após 3 segundos com animação
  setTimeout(() => {
    popup.classList.add('hide');
    setTimeout(() => popup.remove(), 350);
  }, 3000);
}