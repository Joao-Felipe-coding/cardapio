# Cardápio Online

Este projeto é um cardápio online interativo para restaurantes, cafés ou lanchonetes, desenvolvido com HTML, CSS e JavaScript puro. Ele proporciona uma experiência moderna, responsiva e intuitiva para clientes visualizarem produtos, adicionarem itens ao pedido e finalizarem a solicitação diretamente pelo navegador.

## Funcionalidades

- **Visualização de Produtos por Categoria:** Produtos organizados em Bebidas, Salgados e Doces, exibidos com imagem, nome, descrição e preço.
- **Carregamento Dinâmico dos Produtos:** Os produtos são carregados automaticamente via JavaScript, facilitando a manutenção e atualização do cardápio.
- **Navegação Responsiva:** Navbar fixa no topo, com menu hambúrguer para dispositivos móveis e navegação suave entre seções.
- **Adição de Produtos ao Pedido:** Botão "Adicionar" em cada produto, com popup de confirmação animado.
- **Modal de Pedidos:** Visualização dos itens adicionados, cálculo automático do total, opção para limpar a lista e finalizar o pedido.
- **Código da Mesa:** Campo para digitar o código da mesa, com validação automática.
- **Botão "Voltar ao Topo":** Acesso rápido ao topo da página, com animação.
- **Tela de Carregamento Inicial:** Exibe o logo do restaurante enquanto a página carrega.
- **Design Moderno e Responsivo:** Layout adaptável para desktop, tablet e mobile.
- **Acessibilidade:** Uso de fontes legíveis, contraste adequado e navegação por teclado.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização, responsividade e animações.
- **JavaScript Vanilla**: Manipulação do DOM, carregamento dinâmico, interações e validações.

## Estrutura do Projeto

```
cardapio/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── categorias-produtos.css
│   │   ├── mobile-nav-bar.css
│   │   ├── back-to-top.css
│   │   └── popup-adicionado.css
│   ├── js/
│   │   ├── main.js
│   │   ├── loadProdutos.js
│   │   ├── pedidos.js
│   │   ├── mobileNavbar.js
│   │   └── backToTop.js
│   └── images/
│       ├── site-logo/
│       │   └── logo.svg
│       ├── bebidas/
│       ├── salgados/
│       └── doces/
└── LICENSE
```

## Como Usar

1. **Clone ou baixe o repositório:**
   ```bash
   git clone https://github.com/Unicesumar/front-end.git
   ```
2. **Abra o arquivo `index.html` em seu navegador.**
3. **Navegue pelas categorias, adicione produtos ao pedido e finalize normalmente.**

## Detalhes das Funcionalidades

- **Navegação Mobile:** Menu hambúrguer com animação, fecha automaticamente ao selecionar uma seção.
- **Pedidos:** Modal centralizado, bloqueia o fundo ao abrir, permite visualizar, limpar e finalizar pedidos.
- **Código da Mesa:** Inputs automáticos, validação de formato e feedback visual de erro.
- **Popups:** Confirmação animada ao adicionar produtos.
- **Botão Voltar ao Topo:** Sempre visível, com animação ao passar o mouse (desktop).

## Licença

MIT License © 2025 João Felipe

---

Projeto desenvolvido para fins educacionais e demonstração de boas práticas em front-end.