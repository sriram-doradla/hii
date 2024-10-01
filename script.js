const apiKey = '6a44663576bc4974b04c3d8e9c816d9c'; // Replace with your NewsAPI key
const newsContainer = document.getElementById('news-container');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('search');

async function fetchNews(query = '') {
    const response = await fetch('news.json');
    const data = await response.json();
    displayNews(data.articles);
}

function displayNews(articles) {
    newsContainer.innerHTML = '';
    articles.forEach(article => {
        const newsDiv = document.createElement('div');
        newsDiv.className = 'news-article';
        
        newsDiv.innerHTML = `
            <img src="${article.urlToImage}" alt="${article.title}">
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        
        newsContainer.appendChild(newsDiv);
    });
}

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    fetchNews(query);
});

// Fetch top news on page load
fetchNews();
