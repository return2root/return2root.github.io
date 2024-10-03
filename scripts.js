// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const articleForm = document.getElementById('article-form');
    const blogArticlesSection = document.getElementById('blog-articles');

    // Load articles from local storage
    let articles = JSON.parse(localStorage.getItem('articles')) || [];

    function renderArticles() {
        blogArticlesSection.innerHTML = '';
        articles.forEach((article, index) => {
            const articleElement = document.createElement('article');
            articleElement.classList.add('blog-post');
            articleElement.dataset.index = index;

            const articleTitle = document.createElement('h2');
            articleTitle.textContent = article.title;

            const articleDate = document.createElement('p');
            articleDate.classList.add('post-date');
            articleDate.textContent = new Date(article.date).toLocaleDateString();

            const articleContent = document.createElement('p');
            articleContent.textContent = article.content;

            const actions = document.createElement('div');
            actions.classList.add('actions');

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => editArticle(index));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteArticle(index));

            const archiveButton = document.createElement('button');
            archiveButton.textContent = 'Archive';
            archiveButton.addEventListener('click', () => archiveArticle(index));

            actions.appendChild(editButton);
            actions.appendChild(deleteButton);
            actions.appendChild(archiveButton);

            articleElement.appendChild(articleTitle);
            articleElement.appendChild(articleDate);
            articleElement.appendChild(articleContent);
            articleElement.appendChild(actions);

            blogArticlesSection.appendChild(articleElement);
        });
    }

    function addArticle(title, date, content) {
        const newArticle = { title, date, content, archived: false };
        articles.push(newArticle);
        localStorage.setItem('articles', JSON.stringify(articles));
        renderArticles();
    }

    function editArticle(index) {
        const article = articles[index];
        document.getElementById('title').value = article.title;
        document.getElementById('date').value = article.date;
        document.getElementById('content').value = article.content;
        articles.splice(index, 1);
        localStorage.setItem('articles', JSON.stringify(articles));
        renderArticles();
    }

    function deleteArticle(index) {
        articles.splice(index, 1);
        localStorage.setItem('articles', JSON.stringify(articles));
        renderArticles();
    }

    function archiveArticle(index) {
        articles[index].archived = true;
        localStorage.setItem('articles', JSON.stringify(articles));
        renderArticles();
    }

    articleForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const date = document.getElementById('date').value;
        const content = document.getElementById('content').value;

        addArticle(title, date, content);

        // Clear the form
        articleForm.reset();
    });

    renderArticles();
});


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Here you can add your login logic, e.g., sending the credentials to a server
        console.log('Username:', username);
        console.log('Password:', password);

        // For demonstration purposes, we'll just show an alert
        alert('Login successful!');

        // Clear the form
        loginForm.reset();
    });
});