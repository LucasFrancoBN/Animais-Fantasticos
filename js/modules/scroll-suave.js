<<<<<<< HEAD
export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#']"
  );

  function scrollToView(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
    });
  }

  linksInternos.forEach((item) => item.addEventListener("click", scrollToView));
=======
export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: "smooth",
        block: "start",
      };
    } else {
      this.options = options;
    }
    this.scrollToView = this.scrollToView.bind(this);
  }

  scrollToView(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addEvent() {
    this.linksInternos.forEach((item) => {
      item.addEventListener("click", this.scrollToView);
    });
  }

  init() {
    this.addEvent();
    return this;
  }
>>>>>>> 0962e3ea0ab15abdcd1edae78986d447fb06a8db
}
