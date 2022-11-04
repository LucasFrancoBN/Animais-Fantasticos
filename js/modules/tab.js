<<<<<<< HEAD
export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  function activeTab(index) {
    const direcao = tabContent[index].dataset.anime;
    tabContent.forEach((section) => section.classList.remove("ativo"));
    tabContent[index].classList.add("ativo", direcao);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo", tabContent[0].dataset.anime);

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => activeTab(index));
    });
  }
=======
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
    return this;
  }
>>>>>>> 0962e3ea0ab15abdcd1edae78986d447fb06a8db
}
