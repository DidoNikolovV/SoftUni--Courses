function solve(){
    let createBtn = document.querySelector('.site-content section .create');
    createBtn.addEventListener('click', createArticle);

    function createArticle(e) {
        e.preventDefault();

        let author = document.getElementById('creator');
        let title = document.getElementById('title');
        let category = document.getElementById('category');
        let content = document.getElementById('content');
        
        let article = document.createElement('article');
        let titleParagraph = document.createElement('h1');
        titleParagraph.textContent = title.value;
        let categoryParagraph = document.createElement('p');
        categoryParagraph.textContent = 'Category:';
        let categoryStrong = document.createElement('strong');
        categoryStrong.textContent = category.value;
        categoryParagraph.appendChild(categoryStrong);
    
        let creatorParagraph = document.createElement('p');
        creatorParagraph.textContent = 'Creator:';
        let creatorStrong = document.createElement('strong');
        creatorStrong.textContent = author.value;
        creatorParagraph.appendChild(creatorStrong);

        let contentParagraph = document.createElement('p');
        contentParagraph.textContent = content.value;
        
        let div = document.createElement('div');
        div.classList.add('buttons');
        let deleteBtn = document.createElement('button');
        deleteBtn.addEventListener('click', deleteArticleHandler)
        deleteBtn.classList.add('btn', 'delete');
        deleteBtn.textContent = 'Delete';

        let archiveBtn = document.createElement('button');
        archiveBtn.addEventListener('click', archiveArticleHandler);
        archiveBtn.classList.add('btn', 'archive');
        archiveBtn.textContent = 'Archive';

        div.appendChild(deleteBtn);
        div.appendChild(archiveBtn);


        article.appendChild(titleParagraph)
        article.appendChild(categoryParagraph)
        article.appendChild(creatorParagraph)
        article.appendChild(contentParagraph);
        article.appendChild(div);

        let postSection = document.querySelector('.site-content main section');
        postSection.appendChild(article);
        
    }

    function deleteArticleHandler(e) {
        let articleToDelete = e.target.parentElement.parentElement;
        articleToDelete.remove();
    }

    function archiveArticleHandler(e){
        let articleToArchive = e.target.parentElement.parentElement
        let archiveOl = document.querySelector('.archive-section ol');

        let archiveLis = Array.from(archiveOl.querySelectorAll('li'));
        let articleTitle = articleToArchive.querySelector('h1');

        let newTitleLi = document.createElement('li');
        newTitleLi.textContent = articleTitle.textContent;

        articleToArchive.remove();

        archiveLis.push(newTitleLi);
        archiveLis.sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li => archiveOl.appendChild(li));  
    }
}




