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
