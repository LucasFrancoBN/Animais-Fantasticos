export default function initAccordion() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      let start = 0;
      const incremento = Math.floor(total / 100);
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("animacao-scroll")) {
      observer.disconnect();
      animaNumeros();
    }
  }
  const observerTarget = document.querySelector(".numeros");
  observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
