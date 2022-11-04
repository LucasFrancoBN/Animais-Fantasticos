<<<<<<< HEAD
export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function cliqueForaModal(event) {
    if (event.target === this) toggleModal(event);
  }
  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
=======
export default class initModal {
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
>>>>>>> 0962e3ea0ab15abdcd1edae78986d447fb06a8db
  }
}
