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

document.addEventListener('DOMContentLoaded', function () {
    const watchLaterList = document.getElementById('watch-later-list');
    const customLists = document.getElementById('custom-lists');
    const createListBtn = document.getElementById('create-list-btn');
    const createListModal = document.getElementById('create-list-modal');
    const closeBtn = document.querySelector('.close');
    const createListConfirmBtn = document.getElementById('create-list-confirm');
    
    // Função para exibir o modal de criação de lista
    createListBtn.addEventListener('click', function () {
        createListModal.style.display = 'block';
    });

    // Função para fechar o modal
    closeBtn.addEventListener('click', function () {
        createListModal.style.display = 'none';
    });

    // Função para criar uma nova lista personalizada
    createListConfirmBtn.addEventListener('click', function () {
        const listName = document.getElementById('list-name').value;
        const listDescription = document.getElementById('list-description').value;

        // Adicione o código para criar a lista e adicioná-la à seção de listas personalizadas

        // Exemplo de como adicionar um item à lista de assistir mais tarde
        const li = document.createElement('li');
        li.textContent = listName;
        customLists.appendChild(li);

        createListModal.style.display = 'none';
    });

    // Exemplo de como adicionar um item à lista de assistir mais tarde
    const watchLaterItem = document.createElement('li');
    watchLaterItem.textContent = 'Nome do Filme ou Série';
    watchLaterList.appendChild(watchLaterItem);
});

// function obterLista() {
//     const lista = JSON.parse(localStorage.getItem('lista')) || [];
//     return lista;
// }

// function obterAssistirMaisTarde() {
//     const assistirMaisTarde = JSON.parse(localStorage.getItem('assistirMaisTarde')) || [];
//     return assistirMaisTarde;
// }

// document.addEventListener('DOMContentLoaded', function () {
//     const lista = obterLista();
//     renderizarLista(lista, 'listaContainer');

//     const assistirMaisTarde = obterAssistirMaisTarde();
//     renderizarLista(assistirMaisTarde, 'assistirMaisTardeContainer');
// });

// renderizarLista(['Item 1', 'Item 2'], 'listaContainer');
// renderizarLista(['Assistir Mais Tarde 1', 'Assistir Mais Tarde 2'], 'assistirMaisTardeContainer');

// function renderizarLista(lista, containerId) {
//     const container = document.getElementById(containerId);

//     if (!container) {
//         console.error(`Elemento com o ID '${containerId}' não encontrado.`);
//         return;
//     }

//     container.innerHTML = ''; 

//     if (lista.length === 0) {
//         container.innerHTML = '<p>Nenhum item na lista.</p>';
//         return;
//     }

//     container.innerHTML = lista.map(item => `<li>${item}</li>`).join('');
// }

// function renderizarLista(lista, containerId) {
//     const container = document.getElementById(containerId);

//     if (!container) {
//         console.error(`Elemento com o ID '${containerId}' não encontrado.`);
//         return;
//     }

//     container.innerHTML = ''; 

//     if (lista.length === 0) {
//         container.innerHTML = '<p>Nenhum item na lista.</p>';
//         return;
//     }

//     lista.forEach(item => {
//         if (item && item.poster_path) {
//             const listItem = document.createElement('li'); 
//             listItem.className = 'list-inline-item'; 

//             const mediaCard = document.createElement('div');
//             mediaCard.className = 'media-card';

//             const posterImg = document.createElement('img');
//             posterImg.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`; 
//             posterImg.alt = item.title || item.name || 'Poster'; 

//             posterImg.addEventListener('click', function () {
//                 const itemName = item.title || item.name;
//                 window.location.href = 'pesquisa.html?search=' + encodeURIComponent(itemName);
//             });

//             mediaCard.appendChild(posterImg);
//             listItem.appendChild(mediaCard);

//             container.appendChild(listItem);
//         }
//     });
// }





