function focused() {
    let divsText = document.querySelectorAll('input[type=text]');
    for(let div of divsText){
        div.addEventListener('focus', addFocus);
        div.addEventListener('blur', addBlur);
        
    }

    function addFocus(e){
        e.target.parentElement.classList = 'focused';
    }
    
    function addBlur(e){
        e.target.parentElement.classList = '';
    }
    
    
}

