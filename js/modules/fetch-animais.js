<<<<<<< HEAD
import initAnimaNumeros from "./animaNumeros.js";
=======
import AnimaNumeros from "./animaNumeros.js";
>>>>>>> 0962e3ea0ab15abdcd1edae78986d447fb06a8db

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const aniamisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");
      aniamisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
<<<<<<< HEAD
      initAnimaNumeros();
=======
      const animaNumeros = new AnimaNumeros(
        "[data-numero]",
        ".numeros",
        "animacao-scroll"
      );
      animaNumeros.init();
>>>>>>> 0962e3ea0ab15abdcd1edae78986d447fb06a8db
    } catch (error) {
      console.log(error);
    }
  }

  fetchAnimais("./animaisapi.json");
}
