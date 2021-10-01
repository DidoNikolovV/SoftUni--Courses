function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onToggle));

    function onToggle(e){
        const profile = e.target.parentElement

        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
        if(isActive) {
            const infoDiv = Array.from(profile.querySelectorAll('div'))
            .find(d => d.id.includes('HiddenFields'));
            if(e.target.textContent == 'Show more'){
                e.target.textContent = 'Hide it';
                infoDiv.style.display = 'block';
            } else {
                e.target.textContent = 'Show more';
                infoDiv.style.display= '';
            }
        }
          
    }
}