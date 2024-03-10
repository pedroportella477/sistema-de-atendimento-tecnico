/// Função para buscar O.S do servidor
function fetchOrders() {
  fetch('/orders') // Substitua '/orders' pela URL da sua API
    .then(response => response.json())
    .then(orders => {
      const tableBody = document.querySelector('table tbody');
      tableBody.innerHTML = ''; // Limpar a tabela antes de adicionar novos dados

      // Adicionar cada O.S à tabela
      orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${order._id}</td>
          <td>${order.clientName}</td>
          <td>${order.status}</td>
        `;
        tableBody.appendChild(row);
      });
    });
}

// Função para pesquisar O.S
function searchOrders() {
  const searchInput = document.querySelector('#search');
  const searchTerm = searchInput.value;

  fetch(`/orders?search=${searchTerm}`) // Substitua '/orders' pela URL da sua API
    .then(response => response.json())
    .then(orders => {
      const tableBody = document.querySelector('table tbody');
      tableBody.innerHTML = ''; // Limpar a tabela antes de adicionar novos dados

      // Adicionar cada pedido à tabela
      orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${order._id}</td>
          <td>${order.clientName}</td>
          <td>${order.status}</td>
        `;
        tableBody.appendChild(row);
      });
    });
}

// Função para atualizar o texto do rodapé
function updateFooterText() {
  var currentYear = new Date().getFullYear();
  var footerTextElement = document.getElementById('footerText');
  footerTextElement.textContent = '© ' + currentYear + ' Desenvolvido por Pedro Portella';
}

// Adicionar evento de clique ao botão de pesquisa
const searchButton = document.querySelector('#searchButton');
searchButton.addEventListener('click', searchOrders);

// Buscar pedidos quando a página é carregada
fetchOrders();

// Atualizar o texto do rodapé quando a página é carregada
updateFooterText();
