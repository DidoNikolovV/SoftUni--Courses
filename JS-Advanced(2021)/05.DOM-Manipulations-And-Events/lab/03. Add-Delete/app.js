function addItem() {
    let newItem = document.getElementById('newItemText').value;
    let list = document.getElementById('items');


    let listItem = document.createElement('li');
    listItem.textContent = newItem;

    let remove = document.createElement('a');
    let linkText = document.createTextNode('[Delete]');
    remove.appendChild(linkText);
    remove.href = "#";
    remove.addEventListener('click', removeItem);


    listItem.appendChild(remove);
    list.appendChild(listItem);

    function removeItem(){
        listItem.remove();
    }
    
}