// --------------------- SLIDE DOS TEXTOS ----------------------

export default function initTextoInfinito() {
document.addEventListener("DOMContentLoaded", function () {
  const banner = document.querySelector(".banner-faixa");
  const textos = document.querySelectorAll(".faixa-texto");

  // Duplica os textos para garantir o loop contínuo
  textos.forEach((texto) => {
    let clone = texto.cloneNode(true);
    banner.appendChild(clone);
  });

  let offset = 0;
  const velocidade = 1.5; // velocidade de passagem

  function deslizar() {
    offset -= velocidade;
    banner.style.transform = `translateX(${offset}px)`;

    // Verifica se todo o conteúdo já passou pela tela
    if (Math.abs(offset) >= banner.scrollWidth / 2) {
      offset = 0; // Reinicia o loop apenas quando o último texto sair completamente
    }
    requestAnimationFrame(deslizar);
  }
  deslizar();
});
}