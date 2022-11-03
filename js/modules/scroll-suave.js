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
    console.log(this.options);
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
}
