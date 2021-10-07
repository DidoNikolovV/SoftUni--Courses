function solve() {
    let nameInput = document.querySelector('#container').children[0];
    let hallInput = document.querySelector('#container').children[1];
    let ticketInput = document.querySelector('#container').children[2];
    let onScreenButton = document.querySelector('#container > button');
    onScreenButton.addEventListener('click', addMovies);

    let moviesSection = document.querySelector('#movies ul');
    let archiveScetion = document.querySelector('#archive ul');

  
    function addMovies(e){
        e.preventDefault();

        let name = nameInput.value;
        let hall = hallInput.value;
        let price = Number(ticketInput.value).toFixed(2);
        if(name.trim() !== "" && hall.trim() !== "" && price.trim() !== "" && !isNaN(price)) {
            let li = document.createElement('li');
            let span = document.createElement('span');
            span.textContent = name;

            let strong = document.createElement('strong');
            strong.textContent = `Hall: ${hall}`;

            li.appendChild(span);
            li.appendChild(strong);

            let div = document.createElement('div');
            let strongDiv = document.createElement('strong');
            strongDiv.textContent = price;

            let input = document.createElement('input');
            input.setAttribute('placeholder', "Tickets Sold" );
            
            let archiveButton = document.createElement('button');
            archiveButton.textContent = 'Archive';
            archiveButton.addEventListener('click', archiveMovie);

            div.appendChild(strongDiv);
            div.appendChild(input);
            div.appendChild(archiveButton);

            li.appendChild(div);

            moviesSection.appendChild(li);

            nameInput.value = '';
            hallInput.value = '';
            ticketInput.value = '';
        }
    }

    function archiveMovie(e) {
        let name = nameInput.value;
        let ticketsCount = e.target.previousSibling.value;
        let totalPrice = ticketInput.value * ticketsCount;
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.textContent = name

        let strong = document.createElement('strong');
        strong.textContent = `Total amount: ${totalPrice}`;
        
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(deleteButton);

        archiveScetion.appendChild(li);
    }

  
}