// Promoções dinâmicas
const promocoes = [
  "Segunda-feira: 10% de desconto no prato do dia!",
  "Terça-feira: Sobremesa grátis em pedidos acima de 500 MZN.",
  "Quarta-feira: 2 bebidas pelo preço de 1.",
  "Quinta-feira: Entrada grátis para dois pratos principais.",
  "Sexta-feira: 15% de desconto em todo o menu.",
  "Sábado: Sobremesas com 50% de desconto!",
  "Domingo: Promoção surpresa no restaurante!"
];

function atualizarPromocoes() {
  const hoje = new Date().getDay();
  const banner = document.getElementById("banner-promocoes");
  banner.textContent = promocoes[hoje - 1] || "Sem promoções hoje!";
}

// Alternar tema
function alternarTema() {
  const body = document.body;
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const buttons = document.querySelectorAll("button");
  const form = document.querySelector("form");

  // Alterna a classe 'dark-mode' nos elementos principais
  body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");
  if (form) form.classList.toggle("dark-mode");

  buttons.forEach(button => button.classList.toggle("dark-mode"));
}

// Inicializar promoções ao carregar a página
window.onload = atualizarPromocoes;
