function toggle() {
    let extraText = document.getElementById('extra');
    let button = document.querySelector('.button');
   

    if(button.textContent == 'Less') {
        extraText.style.display = 'none';
        button.textContent = 'More';
    } else {
        extraText.style.display = 'block';
        button.textContent = 'Less';
    }

}