// Array de objetos com as categorias e produtos
const produtosData = {
  bebidas: [
    { name: "Café Expresso", description: "60ml", price: "R$ 4,00", image: "assets/images/bebidas/cafe-expresso.jpg" },
    { name: "Capuccino", description: "200ml", price: "R$ 6,00", image: "assets/images/bebidas/capuccino.jpg" },
    { name: "Chá Gelado", description: "300ml", price: "R$ 5,50", image: "assets/images/bebidas/cha-gelado.jpg" },
    { name: "Suco de Laranja", description: "250ml", price: "R$ 5,00", image: "assets/images/bebidas/suco-laranja.jpg" },
    { name: "Água Mineral", description: "500ml", price: "R$ 3,00", image: "assets/images/bebidas/agua-mineral.jpg" },
    { name: "Coca Cola", description: "350ml", price: "R$ 4,50", image: "assets/images/bebidas/coca-cola-350ml.jpg" }
  ],
  salgados: [
    { name: "Croissant", description: "Frances, amanteigado", price: "R$ 7,00", image: "assets/images/salgados/croissant.jpg" },
    { name: "Sanduíche Natural", description: "Frango e salada", price: "R$ 10,00", image: "assets/images/salgados/sanduiche-natural.jpg" },
    { name: "Quiche", description: "Alho-Poró", price: "R$ 8,50", image: "assets/images/salgados/quiche.jpg" },
    { name: "Empada", description: "Frango e palmito", price: "R$ 9,00", image: "assets/images/salgados/empada-frango.jpg" },
    { name: "Pastel", description: "Carne", price: "R$ 5,00", image: "assets/images/salgados/pastel.jpg" },
    { name: "Esfiha", description: "Carne", price: "R$ 6,00", image: "assets/images/salgados/esfiha.jpg" }
  ],
  doces: [
    { name: "Bolo de Chocolate", description: "Fatia", price: "R$ 12,00", image: "assets/images/doces/bolo-chocolate.jpg" },
    { name: "Muffin Blueberry", description: "Úmido", price: "R$ 9,00", image: "assets/images/doces/muffin-blueberry.jpg" },
    { name: "Torta de Limão", description: "Fatia", price: "R$ 11,00", image: "assets/images/doces/torta-limao.jpg" },
    { name: "Brigadeiro", description: "Unidade", price: "R$ 2,50", image: "assets/images/doces/brigadeiro.jpg" },
    { name: "Pudim", description: "Fatia", price: "R$ 8,00", image: "assets/images/doces/pudim.jpg" },
    { name: "Petit Gateau", description: "Com sorvete", price: "R$ 15,00", image: "assets/images/doces/petit-gateau.jpg" }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  // Itera sobre cada categoria para popular as seções
  for (const cat of ['bebidas', 'salgados', 'doces']) {
    const container = document.getElementById(cat);
    if (container && Array.isArray(produtosData[cat])) {
      container.innerHTML = ''; // Limpa o conteúdo existente
      for (const produto of produtosData[cat]) {
        const divProduto = document.createElement('div');
        divProduto.className = 'produto';
        divProduto.innerHTML = `
          <div class="produto-superior">
            <div class="produto-dados">
              <h3>${produto.name}</h3>
              <p>${produto.description}</p>
            </div>
            <img src="${produto.image}" alt="${produto.name}">
          </div>
          <div class="produto-inferior">
            <span class="preco">${produto.price}</span>
            <button class="adicionar">Adicionar</button>
          </div>
        `;
        container.appendChild(divProduto);
      }
    }
  }
});
