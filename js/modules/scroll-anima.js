export default class ScrollAnima {
  constructor(articles) {
    this.articles = document.querySelectorAll(articles);
    this.alturaWindow = window.innerHeight * 0.5;

    this.animarScroll = this.animarScroll.bind(this);
  }

  animarScroll() {
    this.articles.forEach((article) => {
      const topoArticle = article.getBoundingClientRect().top;
      const verificadorAltura = topoArticle - this.alturaWindow < 0;
      if (verificadorAltura) article.classList.add("animacao-scroll");
      else if (article.classList.contains("animacao-scroll")) {
        article.classList.remove("animacao-scroll");
      }
    });
  }

  init() {
    this.animarScroll();
    window.addEventListener("scroll", this.animarScroll);
  }
}
