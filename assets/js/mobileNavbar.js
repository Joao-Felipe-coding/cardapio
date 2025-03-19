class MobileNavbar {
  constructor(hamburger, navList, navLinks) {
    this.hamburger = document.querySelector(hamburger);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      // Reinicia a animação forçando reflow
      link.style.animation = 'none';
      void link.offsetWidth;
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.hamburger.addEventListener("change", this.handleClick);
  }

  init() {
    if (this.hamburger) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".hamburger input",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

document.addEventListener('DOMContentLoaded', () => {
  // Seleciona apenas os links da lista de navegação
  const navLinks = document.querySelectorAll('nav .nav-list li a');

  // biome-ignore lint/complexity/noForEach: <explanation>
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      // Fecha o menu removendo a classe "active"
      const navList = document.querySelector('.nav-list');
      navList.classList.remove('active');
      // Desmarca o hamburger
      const hamburgerInput = document.querySelector('.hamburger input');
      if (hamburgerInput) {
        hamburgerInput.checked = false;
      }
      // Redireciona para a seção correspondente
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});