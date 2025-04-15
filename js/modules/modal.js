// export default function initModal() {}
// const botaoAbrir = document.querySelectorAll('[data-modal="abrir-login"]');
// const botaoFechar = document.querySelector('[data-modal="fechar"]');
// const containerModal = document.querySelector('[data-modal="container"]');

// function abrirModal(event) {
//   event.preventDefault();
//   containerModal.classList.add("ativo");
// }
// function fecharModal() {
//   containerModal.classList.remove("ativo");
// }
// botaoAbrir.forEach((botao) => {
//   botao.addEventListener("click", abrirModal);
// });
// botaoFechar.addEventListener("click", fecharModal);


export default function initModal() {}

const botaoAbrirLogin = document.querySelectorAll('[data-modal="abrir-login"]');
const botaoFecharLogin = document.querySelector('[data-modal="fechar"]');
const containerModalLogin = document.querySelector('[data-modal="container-login"]');

const botaoAbrirCadastro = document.querySelectorAll('[data-modal="abrir-cadastro"]');
const botaoFecharCadastro = document.querySelector('[data-modal="fechar-cadastro"]');
const containerModalCadastro = document.querySelector('[data-modal="container-cadastro"]');

// Login
function abrirModalLogin(event) {
  event.preventDefault();
  containerModalLogin.classList.add("ativo");
  document.body.classList.add("no-scroll");
}
function fecharModalLogin() {
  containerModalLogin.classList.remove("ativo");
  document.body.classList.remove("no-scroll");
}

// Cadastro
function abrirModalCadastro(event) {
  event.preventDefault();
  containerModalCadastro.classList.add("ativo");
  document.body.classList.add("no-scroll");

}
function fecharModalCadastro() {
  containerModalCadastro.classList.remove("ativo");
  document.body.classList.remove("no-scroll");

}

botaoAbrirLogin.forEach((btn) => {
  btn.addEventListener("click", abrirModalLogin);
});
botaoFecharLogin.addEventListener("click", fecharModalLogin);

botaoAbrirCadastro.forEach((btn) => {
  btn.addEventListener("click", abrirModalCadastro);
});
botaoFecharCadastro.addEventListener("click", fecharModalCadastro);

const linkCadastro = document.getElementById('abrir-cadastro');
const linkFazerLogin = document.getElementById('abrir-login');

linkCadastro.addEventListener('click', (event) => {
  event.preventDefault();
  containerModalLogin.classList.remove("ativo");     // fecha o modal de login
  containerModalCadastro.classList.add("ativo");     // abre o modal de cadastro
});
linkFazerLogin.addEventListener('click', (event) => {
  event.preventDefault();
  containerModalCadastro.classList.remove("ativo");   // fecha o modal de cadastro
  containerModalLogin.classList.add("ativo");         // abre o modal de login
});
