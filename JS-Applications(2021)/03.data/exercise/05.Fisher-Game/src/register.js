window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form#register button').addEventListener('submit', onRegister);
})

async function onRegister(event){
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    try {
        const res = await fetch('http:localhost:3030/users/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })  

        if(res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const data = await res.json();
        const token = data.accessToken;
        sessionStorage.setItem('token', token);
        window.location = '/index.html';
    } catch(err) {
        alert(err.message);
    }

    
}

