export default class Modal {
  constructor(btnAbrir, btnFechar, containerModal) {
    this.btnAbrir = document.querySelector(btnAbrir);
    this.btnFechar = document.querySelector(btnFechar);
    this.containerModal = document.querySelector(containerModal);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  cliqueForaModal(event) {
    if (event.target === this.containerModal) this.toggleModal(event);
  }

  addEventBtnAbrir() {
    this.btnAbrir.addEventListener("click", this.eventToggleModal);
  }

  addEventBtnFechar() {
    this.btnFechar.addEventListener("click", this.eventToggleModal);
  }

  addEventContainerModal() {
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.btnAbrir && this.btnFechar && this.containerModal) {
      this.addEventBtnAbrir();
      this.addEventBtnFechar();
      this.addEventContainerModal();
    }
    return this;
  }
}
