function validarContacto() {
  // Obter valores dos campos
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const assunto = document.getElementById("assunto").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // Validar campos vazios
  if (!nome || !email || !assunto || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return false; // Impede envio
  }

  // Exibir mensagem de sucesso
  alert("Mensagem enviada com sucesso!");
  return false; // Impede envio real (simulação)
}

// Função para carregar o mapa (usando Google Maps Embed API)
function carregarMapa() {
  const mapa = document.getElementById("mapa");
  mapa.innerHTML = `
    <iframe
      width="100%"
      height="300"
      frameborder="0"
      style="border:0"
      src="https://www.google.com/maps/embed/v1/place?q=Av.%20Principal%2C%20123%2C%20Cidade&key=YOUR_API_KEY"
      allowfullscreen>
    </iframe>
  `;
}

// Carregar o mapa ao abrir a página
window.onload = carregarMapa;
