function displayResultsTitulo(results) {
    const resultsContainer = document.getElementById('#results');

    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>Nenhum resultado encontrado.</p>';
        return;
    }

    results.forEach(async item => {
        if (!item.poster_path) {
            return;
        }

        const resultElement = document.createElement('div');
        resultElement.classList.add('result');

        let title, overview, imageUrl;

        if (item.media_type === 'movie') {
            title = item.title;
            overview = item.overview;
            imageUrl = item.poster_path
                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                : '';
        } else if (item.media_type === 'tv') {
            title = item.name;
            overview = item.overview;
            imageUrl = item.poster_path
                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                : '';
        }

        if (!imageUrl) {
            return;
        }

        const streamingLogosElement = document.createElement('div');
        const streamingNamesList = document.createElement('ul');
        streamingLogosElement.classList.add('streaming-logos');

        try {
            const streamingProviders = await getStreamingProviders(item.id, item.media_type);

            if (streamingProviders.length > 0) {
                streamingProviders.forEach(provider => {
                    if (provider.logo) {
                        const logoImage = document.createElement('img');
                        logoImage.src = provider.logo;
                        logoImage.alt = `${provider.name} Logo`;
                        logoImage.classList.add('streaming-logo');
                        streamingLogosElement.appendChild(logoImage);

                        const listItem = document.createElement('li');
                        listItem.textContent = provider.name;
                        streamingNamesList.appendChild(listItem);
                    }
                });
            }
        } catch (error) {
            console.error('Erro ao obter provedores de streaming:', error);
        }

        if (item.media_type === 'movie') {
            await getMovieDetails(item.id, resultElement);
        } else if (item.media_type === 'tv') {
            await getTVShowDetails(item.id, resultElement);
        }

        resultElement.innerHTML = `
            <div class="row">
                <div class="col-md-4">
                    <img src="${imageUrl}" alt="${title} Poster" class="d-block w-100 rounded">
                </div>
                <div class="col-md-8">
                    <h2>${title}</h2>
                    <p>${overview}</p>
                    <div class="streaming-logos-horizontal">
                        ${streamingLogosElement.outerHTML}
                    </div>
                    <div class="streaming-names-list">
                        <p><strong>Disponível em:</strong></p>
                        ${streamingNamesList.outerHTML}
                    </div>
                </div>
            </div>
        `;

        resultsContainer.appendChild(resultElement);
    });
}