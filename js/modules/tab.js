export default class initTabNav {
  constructor(menus, contents) {
    this.menus = document.querySelectorAll(menus);
    this.contents = document.querySelectorAll(contents);
    this.activeClass = "ativo";
  }

  activeTab(index) {
    const direcao = this.contents[index].dataset.anime;
    this.contents.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    this.contents[index].classList.add(this.activeClass, direcao);
  }

  addTabEvent() {
    this.menus.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.menus.length && this.contents.length) {
      this.activeTab(0);
      this.addTabEvent();
    }
  }
}
