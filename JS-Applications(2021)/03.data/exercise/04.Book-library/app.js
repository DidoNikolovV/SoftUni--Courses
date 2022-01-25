// x load all books
// x create book
// x update book
// x delete book

// x handle create form
// handle edit format

// load book for editting
// handle delete button

// initialization

const tbody = document.querySelector('tbody');
const createForm = document.getElementById('createForm');
const editForm = document.getElementById('editForm');
createForm.addEventListener('submit', onCreate);
editForm.addEventListener('submit', onEditSubmit);
document.getElementById('loadBooks').addEventListener('click', loadBooks);

tbody.addEventListener('click', onTableClick);

loadBooks();

async function onEditSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const id = formData.get('id');
    const author = formData.get('author');
    const title = formData.get('title');

    const result = await updateBook(id, {author, title});

    form.reset();
    createForm.style.display = 'block';
    editForm.style.display = 'none';

    loadBooks();
}

function onTableClick(event) {
    if(event.target.className == 'delete') {
        console.log('clicked delete');
        onDelete(event.target);
    } else if(event.target.className == 'edit') {
        console.log('clicked edit');
        onEdit(event.target);
    }
}

async function onEdit(button){
    const id = button.parentElement.dataset.id;
    const book = await loadBookById(id);

    createForm.style.display = 'none';
    editForm.style.display = 'block';

    editForm.querySelector('[name="id"]').value = id;
    editForm.querySelector('[name="author"]').value = book.author;
    editForm.querySelector('[name="title"]').value = book.title;  
}


async function onDelete(button){
    const id = button.parentElement.dataset.id;
    await deleteBook(id);
    button.parentElement.parentElement.remove();
}

async function onCreate(event){
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const author = formData.get('author');
    const title = formData.get('title');

    const result = await createBook({author, title});
    tbody.appendChild(createRow(result._id, result));
    form.reset();
}

async function loadBooks(){
    const books = await request('http://localhost:3030/jsonstore/collections/books');
    
    const result = Object.entries(books).map(([id, book]) => createRow(id, book));
    tbody.replaceChildren(...result);
}

async function loadBookById(id) {
    const book = await request('http://localhost:3030/jsonstore/collections/books/' + id);
    return book;
}

function createRow(id, book) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td>
<td>${book.author}</td>
<td data-id=${id}>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
</td>`
    return row;
}

async function createBook(book){
    const result = await request('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        body: JSON.stringify(book)
    });
    return result;
}

async function updateBook(id, book){
    const result = await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'put',
        body: JSON.stringify(book)
    });
    return result;
}

async function deleteBook(id){
    const result = await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'delete'
    });
    return result;
}



async function request(url, options){
    const response = await fetch(url, options);

    if(options && options.body != undefined){
        Object.assign(options, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    if(response.ok != true){
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }

    const data = await response.json();

    return data;
}
