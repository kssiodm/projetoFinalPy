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

const watchLaterList = ["Filme 1", "Série 1"];
const customLists = [];

function showCreateListForm() {
    const createListForm = document.getElementById("create-list-form");
  
    // Verificar se o elemento foi encontrado antes de tentar acessar a propriedade style
    if (createListForm) {
      createListForm.style.display = "block";
    } else {
      console.error("Elemento 'create-list-form' não encontrado.");
    }
}

function createCustomList() {
  const listName = document.getElementById("list-name").value;
  const listDescription = document.getElementById("list-description").value;

  if (listName) {
    const newList = { name: listName, description: listDescription, items: [] };
    customLists.push(newList);
    displayCustomLists();
    clearCreateListForm();
  }
}

function displayCustomLists() {
  const customListsSection = document.getElementById("custom-lists");
  customListsSection.innerHTML = "<h2>Minhas Listas Personalizadas</h2>";

  customLists.forEach((list) => {
    const listContainer = document.createElement("div");
    listContainer.innerHTML = `<h3>${list.name}</h3>`;
    
    if (list.description) {
      listContainer.innerHTML += `<p>${list.description}</p>`;
    }

    // Adicione aqui a lógica para exibir os filmes e séries da lista
    // Exemplo: list.items.forEach(item => console.log(item));

    customListsSection.appendChild(listContainer);
  });

  customListsSection.innerHTML += `<button onclick="showCreateListForm()">+</button>`;
}

function clearCreateListForm() {
  document.getElementById("list-name").value = "";
  document.getElementById("list-description").value = "";
  document.getElementById("create-list-form").style.display = "none";
}

// Exemplo de chamada de função para inicializar a exibição
displayCustomLists();