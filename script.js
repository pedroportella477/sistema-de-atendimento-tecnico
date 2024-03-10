document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  document.getElementById("submitOrder").addEventListener("click", function(event) {
    event.preventDefault();
    
    // Obtendo os valores dos campos do formulário
    var docType = document.getElementById("docType").value;
    var docNumber = document.getElementById("docNumber").value;
    var clientName = document.getElementById("clientName").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var issue = document.getElementById("issue").value;
    var description = document.getElementById("description").value;

    // Validando os campos
    if (!docType || !docNumber || !clientName || !address || !phone || !email || !issue || !description) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Criando o objeto com os dados do formulário
    var formData = {
      docType: docType,
      docNumber: docNumber,
      clientName: clientName,
      address: address,
      phone: phone,
      email: email,
      issue: issue,
      description: description
    };

    // Enviando os dados para o MongoDB
    fetch('/api/ordem-servico', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao enviar ordem de serviço');
      }
      return response.json();
    })
    .then(data => {
      // Lógica para manipular a resposta do servidor, se necessário
      console.log(data);
      alert('Ordem de serviço enviada com sucesso!');
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao enviar a ordem de serviço');
    });
  });
});
