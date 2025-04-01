// ------------------ SLIDE POR QUE NOS ESCOLHER ----------------------

export default function initSlideMotivo() {
  const btnNext = document.querySelector(".nextSlide");
  const btnPrevious = document.querySelector(".previousSlide");
  const slider = document.querySelector(".slider");
  const content = document.querySelector(".content");
  const dotsContainer = document.querySelector(".length-dots");

  const slides = content.children;
  const slideWidth = slides[0].clientWidth;
  const totalSlides = slides.length;

  const factor = 1.1; // Fator de avanço de 10% a mais por clique
  let currentSlide = 0;

  btnNext.addEventListener("click", () => changeSlide(1));
  btnPrevious.addEventListener("click", () => changeSlide(-1));

  function changeSlide(direction) {
    const maxSlides = totalSlides - 1;

    // Avança ou retrocede no carrossel com o fator ajustado
    currentSlide = Math.min(
      Math.max(currentSlide + direction * factor, 0),
      maxSlides
    );
    slider.scrollTo({ left: currentSlide * slideWidth, behavior: "smooth" });

    updateDots();
  }

  function createDots() {
    dotsContainer.innerHTML = "";

    // Criar 3 dots fixos
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dotsContainer.appendChild(dot);
    }

    updateDots();
  }
  function updateDots() {
    const dots = dotsContainer.querySelectorAll(".dot");

    // Resetar as cores e visibilidade
    dots.forEach((dot) => {
      dot.classList.remove("current", "inactive");
      dot.style.visibility = "visible";
    });

    if (currentSlide === 0) {
      // No primeiro slide
      dots[0].style.visibility = "hidden"; // Esconde o dot esquerdo
      dots[1].classList.add("current"); // Centro ativo
      dots[2].style.visibility = "visible"; // Direito visível
    } else if (currentSlide >= totalSlides - 2) {
      // Na antepenúltima e penúltima imagem
      dots[0].style.visibility = "visible"; // Esquerdo visível
      dots[1].classList.add("current"); // Centro ativo
      dots[2].style.visibility = "hidden"; // Esconde o dot direito
    } else if (currentSlide === totalSlides - 1) {
      // No último slide
      dots[0].style.visibility = "visible"; // Esquerdo visível
      dots[1].classList.add("current"); // Centro ativo
      dots[2].style.visibility = "hidden"; // Esconde o dot direito
    } else {
      // Para todos os outros slides
      dots[0].style.visibility = "visible"; // Esquerdo visível
      dots[1].classList.add("current"); // Centro ativo
      dots[2].style.visibility = "visible"; // Direito visível
    }
  }

  // Inicializa os dots e o estado do primeiro slide
  window.onload = () => {
    createDots();
  };
}
