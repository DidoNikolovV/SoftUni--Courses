function addItem() {
    let listElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    let li = document.createElement('li');
    li.textContent = inputElement.value;
    listElement.appendChild(li);

    inputElement.value = '';


}