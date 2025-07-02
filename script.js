/* 
 * Função para enviar mensagem do formulário de contato
*/

function enviarMensagem(event) {
  event.preventDefault(); // Impede o comportamento padrão de submit do formulário (recarregar a página)
  alert("Mensagem enviada com sucesso!"); // Exibe alerta de confirmação para o usuário
}