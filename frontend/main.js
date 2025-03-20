// Polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// CSS
import './assets/css/style.css';
import '../src/assets/css/back-to-top.css';
import '../src/assets/css/categorias-produtos.css';
import '../src/assets/css/mobile-nav-bar.css';

// JS
import '../src/assets/js/loadProdutos';
import '../src/assets/js/backToTop';
import '../src/assets/js/mobileNavbar';
import '../src/assets/js/pedidos';

// Aguarda o carregamento completo da página e remove a tela de loading após 2 segundos adicionais
window.addEventListener('load', () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      // Aguarda 1 segundo para completar a transição suave antes de remover
      setTimeout(() => loadingScreen.remove(), 1000);
    }
  }, 2000);
});
