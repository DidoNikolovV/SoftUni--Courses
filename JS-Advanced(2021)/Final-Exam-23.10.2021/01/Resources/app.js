window.addEventListener('load', solve);

function solve() {
    let addBtnElement = document.getElementById('add-btn');
    addBtnElement.addEventListener('click', addSong);
    function addSong(e){
        e.preventDefault();
        let genreElement = document.getElementById('genre');
        let songNameElement = document.getElementById('name');
        let songAuthorElement = document.getElementById('author');
        let creationDateElement = document.getElementById('date');

        let allHitsElement = document.querySelector('section#all-hits div.all-hits-container');
       
        if(genreElement.value !== "" && songAuthorElement.value !== "" && songNameElement.value !== ""
        && creationDateElement.value !== "") {
            let songDiv = document.createElement('div');
            songDiv.classList.add('hits-info');
            let img = document.createElement('img');
            img.setAttribute('src', './static/img/img.png');

            let h2Genre = document.createElement('h2');
            h2Genre.textContent = `Genre: ${genreElement.value}`;
            let h2Name = document.createElement('h2');
            h2Name.textContent = `Name: ${songNameElement.value}`;
            let h2Author = document.createElement('h2');
            h2Author.textContent = `Author: ${songAuthorElement.value}`;
            let h3Date = document.createElement('h3');
            h3Date.textContent = `Date: ${creationDateElement.value}`;

            let saveBtn = document.createElement('button');
            saveBtn.addEventListener('click', saveSong);
            saveBtn.classList.add('save-btn');
            saveBtn.textContent = 'Save song';
            let likeBtn = document.createElement('button');
            likeBtn.addEventListener('click', likeSong);
            likeBtn.classList.add('like-btn');
            likeBtn.textContent = 'Like song';
            let deleteBtn = document.createElement('button');
            deleteBtn.addEventListener('click', deleteSong)
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = 'Delete';


            songDiv.appendChild(img);
            songDiv.appendChild(h2Genre);
            songDiv.appendChild(h2Name);
            songDiv.appendChild(h2Author);
            songDiv.appendChild(h3Date);
            songDiv.appendChild(saveBtn);
            songDiv.appendChild(likeBtn);
            songDiv.appendChild(deleteBtn);
        
            allHitsElement.appendChild(songDiv);


        genreElement.value = "";
        songNameElement.value = "";
        songAuthorElement.value = "";
        creationDateElement.value = "";

        } 
    }

    function likeSong(e){
        let totalLikesElement = document.querySelector('section#total-likes div.likes p');
        let splittedLikesConent = totalLikesElement.textContent.split(": ");
        let oldLikes = splittedLikesConent.splice(-1, 1);
        let newLikes = Number(oldLikes) + 1;
        splittedLikesConent.push(newLikes);
        totalLikesElement.textContent = splittedLikesConent.join(": ");
        e.target.disabled = true;
      
    }

    function saveSong(e){
        let currentSong = e.target.parentElement;
        let likeBtn = currentSong.querySelector('button.like-btn');
        let saveBtn = currentSong.querySelector('button.save-btn');
        likeBtn.remove();
        saveBtn.remove();
        let savedSongsContainer = document.querySelector('section#saved-hits div.saved-container');
        savedSongsContainer.appendChild(currentSong);
    }

    function deleteSong(e){
        let currentSong = e.target.parentElement;
        currentSong.remove();
    }

}