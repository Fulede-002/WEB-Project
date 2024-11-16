function validarReserva() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;
  const pessoas = document.getElementById('pessoas').value;

  // Exemplo de validação adicional
  if (!nome || !email || !telefone || !data || !hora || pessoas <= 0) {
    alert("Por favor, preencha todos os campos corretamente.");
    return false; // Impede o envio do formulário
  }

  // Exibir os valores no console para garantir que estão sendo capturados corretamente
  console.log("Reserva enviada com sucesso:");
  console.log(`Nome: ${nome}`);
  console.log(`Email: ${email}`);
  console.log(`Telefone: ${telefone}`);
  console.log(`Data: ${data}`);
  console.log(`Hora: ${hora}`);
  console.log(`Número de Pessoas: ${pessoas}`);

  // Retorna true para permitir o envio do formulário
  return true;
}
