window.addEventListener('load', async () => {
    // const token = localStorage.getItem('token');
    // if(token == null) {
    //     window.location = '/login.html';
    // }

    const form = document.querySelector('form');
    form.addEventListener('submit', onLogout)
});


async function onLogout(event){
    const url = 'http://localhost:3030/users/logout';
    event.preventDefault();

    const options = {headers: {}};
    const token = localStorage.getItem('token');
    if(token != null) {
        options.headers['X-Authorization'] = token;
    }

    try {
        const res = await fetch(url, options);   
        if(res.ok == false){
            const error = await res.json();
            throw new Error(error.message);
        }
        const data = await res.json();

        window.location = '/index.html';
        return data


    } catch(err){
        alert(err.message);
    }
    

}
