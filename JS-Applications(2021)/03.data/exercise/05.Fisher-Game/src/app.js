let userData = null;

window.addEventListener('DOMContentLoaded', () => {
    userData = JSON.parse(sessionStorage.getItem('userData'));
    if(userData != null) {
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#addForm button.add').disabled = false;
    } else {
        document.getElementById('user').style.display = 'none';
    }

    document.querySelector('.load').addEventListener('click', loadData); 
   
    document.getElementById('addForm').addEventListener('submit', onCreate)

    document.getElementById('catches').addEventListener('click', onTableClick);

    document.querySelector('div#user').addEventListener('click', onLogout);

    
})

function onTableClick(event) {
    if(event.target.className == 'delete') {
        console.log('clicked delete');
        onDelete(event.target);
    } else if(event.target.className == 'update') {
        console.log('clicked edit');
        // onEdit(event.target);
    }
}


async function onDelete(button) {
    const id = button.parentElement.dataset.id;
    await deleteItem(id);
    button.parentElement.remove();
   
}

async function onEdit() {

}



async function onCreate(event){
    event.preventDefault();
    if(!userData){
        window.location = '/login.html';
        return
    }

    const formData = new FormData(event.target);

    const data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, {[k]: v}), {})
    
    try {
        if(Object.values(data).some(x => x == '')) {
            throw new Error('All fields are required!');
        }
        const res = await fetch('http://localhost:3030/data/catches', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify(data)
        })

        if(res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        }

        loadData();
        event.target.reset();
        
    } catch(err){
        alert(err.message);
    }
}

async function loadData() {
    const res = await fetch('http://localhost:3030/data/catches');
    const data = await res.json();
    document.getElementById('catches').replaceChildren(...data.map(createPreview));
}

async function deleteItem(id){
    const res = await fetch('http://localhost:3030/data/catches/' + id, {
        method: 'delete',
        headers: {
            'X-Authorization': userData.token
        }
    })

    const data = await res.json;
    return data;
}

async function updateItem(id, item) {
    const res = await fetch('http://localhost:3030/data/catches', {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token
        },
        body: JSON.stringify(item)
    })

    const data = await res.json();
    return data;
}


async function onLogout() {
    const options = {headers: {}};
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

function createPreview(item) {
    const isOwner = (userData && userData._id == item._ownerId);
    if(userData && userData._id == item._ownerId) {
        console.log('current user is owner of item ', item.angler);
    }

    const element = document.createElement('div');
    element.className = 'catch';
    element.innerHTML = `<label>Angler</label>
<input type="text" class="angler" value="${item.angler}" ${!isOwner ? "disabled": ''}>
<label>Weight</label>
<input type="text" class="weight" value="${item.weight}"  ${!isOwner ? "disabled": ''}>
<label>Species</label>
<input type="text" class="species" value="${item.species}"  ${!isOwner ? "disabled": ''}>
<label>Location</label>
<input type="text" class="location" value="${item.location}"  ${!isOwner ? "disabled": ''}>
<label>Bait</label>
<input type="text" class="bait" value="${item.bait}" ${!isOwner ? "disabled": ''}>
<label>Capture Time</label>
<input type="number" class="captureTime" value="${item.captureTime}"  ${!isOwner ? "disabled": ''}>
<button class="update" data-id="${item.id}"  ${!isOwner ? "disabled": ''}>Update</button>
<button class="delete" data-id="${item.id}"  ${!isOwner ?"disabled": ''}>Delete</button>`

    return element;
}


