import outsideClick from "./outsideClick.js";

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("ativo");
    });
  }

  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
