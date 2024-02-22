// document.getElementById('searchForm').addEventListener('submit', function(event) {
//     event.preventDefault(); 
//     const searchQuery = document.getElementById('movieTitle').value;
//     if (searchQuery.trim() !== '') {window.onload = function() {
// };
//         window.location.href = 'pesquisa.html?search=' + encodeURIComponent(searchQuery);
//     }
// });

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const searchQuery = document.getElementById('movieTitle').value;
    
    if (searchQuery.trim() !== '') {
        // Construa a URL de redirecionamento para o seu aplicativo Django
        const djangoAppURL = '/pesquisa/';  // Use a URL definida no seu arquivo urls.py
        const redirectURL = `${djangoAppURL}?search=${encodeURIComponent(searchQuery)}`;

        // Redirecione para a URL construída
        window.location.href = redirectURL;
    }
});

document.getElementById('movieTitle').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('searchForm').submit();
    }
});


function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
  document.getElementById('listForm').reset();
}

function saveList() {
  var listName = document.getElementById('listName').value;
  var listDescription = document.getElementById('listDescription').value;

  // Criar elemento de lista na página
  var listContainer = document.getElementById('lists-container');

  var newList = document.createElement('div');
  newList.className = 'list-item';
  newList.innerHTML = '<h3 class="list-name" onclick="openDetailedModal(\'' + listName + '\', \'' + listDescription + '\')">' + listName + '</h3>';
  
  listContainer.appendChild(newList);

  // Limpar o formulário e fechar o modal
  document.getElementById('listForm').reset();
  $('#myModal').modal('hide');
}

function openDetailedModal(name, description) {
  var detailedModalBody = document.getElementById('detailedModalBody');
  detailedModalBody.innerHTML = '<p><strong>Nome:</strong> ' + name + '</p>';
  
  if (description) {
      detailedModalBody.innerHTML += '<p><strong>Descrição:</strong> ' + description + '</p>';
  }

  // Adicione aqui o conteúdo da lista (filmes, séries, etc.)

  $('#detailedModal').modal('show');
}