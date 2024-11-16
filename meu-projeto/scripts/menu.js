// Dados do menu
const pratos = [
  { 
    nome: "Salada de Quinoa", 
    categoria: "vegetariano", 
    descricao: "Salada leve e saudável.", 
    preco: "250 MZN", 
    imagem: "assets/images/download.jpeg" 
  },
  { 
    nome: "Frango ao Molho", 
    categoria: "pratos-do-dia", 
    descricao: "Frango grelhado com molho especial.", 
    preco: "350 MZN", 
    imagem: "assets/images/FrangoMolho.jpeg" 
  },
  { 
    nome: "Bolo Sem Glúten", 
    categoria: "sem-gluten", 
    descricao: "Sobremesa deliciosa e saudável.", 
    preco: "200 MZN", 
    imagem: "assets/images/BoloGluten.jpeg" 
  },
  { 
    nome: "Sopa de Legumes", 
    categoria: "vegetariano", 
    descricao: "Uma entrada quente e nutritiva.", 
    preco: "150 MZN", 
    imagem: "assets/images/SopaLegumes.jpeg" 
  }
];

// Função para exibir os pratos
function carregarMenu(filtro = "todos") {
  const menu = document.getElementById("menu");
  menu.innerHTML = ""; // Limpa o menu antes de carregar

  pratos.forEach(prato => {
    if (filtro === "todos" || prato.categoria === filtro) {
      const pratoDiv = document.createElement("div");
      pratoDiv.classList.add("prato");

      pratoDiv.innerHTML = `
        <img src="${prato.imagem}" alt="${prato.nome}" class="imagem-prato">
        <h3>${prato.nome}</h3>
        <p>${prato.descricao}</p>
        <p><strong>Preço: ${prato.preco}</strong></p>
        <button onclick="avaliarPrato('${prato.nome}')">Avaliar</button>
      `;
      menu.appendChild(pratoDiv);
    }
  });
}

// Filtro dinâmico
function filtrarMenu(categoria) {
  carregarMenu(categoria);
}

// Avaliar pratos
function avaliarPrato(nome) {
  alert(`Você avaliou o prato "${nome}"!`);
}

// Carregar todos os pratos ao abrir a página
window.onload = () => carregarMenu();
