window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('div#user').addEventListener('submit', onLogout);
    
})

async function onLogout() {
    options = {headers: {}};
    const token = sessionStorage.getItem('token');
    if(token !== null) {
        options.headers['X-Authorization'] = token;
    }

    try {
        const res = await fetch('http:localhost:3030/users/logout', options);
        
        if(res.ok != true){
            const error = await res.json();
            throw new Error(error.message);
        }

        const data = await res.json();
        return data;

    }catch(err){
        alert(err.message);
    }
}