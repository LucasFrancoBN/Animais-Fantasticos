import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const eventos = ["click", "touchstart"];
  function openMenu() {
    menuList.classList.add("ativo");
    menuButton.classList.add("ativo");
<<<<<<< HEAD
    console.log(menuButton, menuList);
    outsideClick(menuList, eventos, () => {
      console.log(menuButton, menuList);
=======
    outsideClick(menuList, eventos, () => {
>>>>>>> 0962e3ea0ab15abdcd1edae78986d447fb06a8db
      menuList.classList.remove("ativo");
      menuButton.classList.remove("ativo");
    });
  }

  if (menuButton) {
    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
  }
}
