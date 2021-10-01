function addItem() {
    let inputText = document.getElementById('newItemText');
    let inputValue = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');

    const option = document.createElement('option');
    option.value = inputValue.value;
    option.textContent = inputText.value;
    menu.appendChild(option);

    inputText.value = '';
    inputValue.value = '';
}