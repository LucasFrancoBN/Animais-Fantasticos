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
}
