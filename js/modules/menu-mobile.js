import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const eventos = ["click", "touchstart"];
  function openMenu() {
    menuList.classList.add("ativo");
    menuButton.classList.add("ativo");
    console.log(menuButton, menuList);
    outsideClick(menuList, eventos, () => {
      console.log(menuButton, menuList);
      menuList.classList.remove("ativo");
      menuButton.classList.remove("ativo");
    });
  }

  if (menuButton) {
    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
  }
}
