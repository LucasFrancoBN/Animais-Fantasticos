export default function initAnimacaoScroll() {
  const articles = document.querySelectorAll("[data-anime='scroll']");

  function animarScroll() {
    articles.forEach((article) => {
      const topoArticle = article.getBoundingClientRect().top;
      const alturaWindow = window.innerHeight * 0.5;
      const verificadorAltura = topoArticle < alturaWindow;
      if (verificadorAltura) article.classList.add("animacao-scroll");
      else if (article.classList.contains("animacao-scroll")) {
        article.classList.remove("animacao-scroll");
      }
    });
  }
  animarScroll();

  window.addEventListener("scroll", animarScroll);
}
