export default function initScrollAnimation() {

}

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});