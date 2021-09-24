function sumTable() {
    let pricesElements = document.querySelectorAll('table tr');
    let sum = 0;
    for(let i = 1; i < pricesElements.length - 1; i++){
        let price = pricesElements[i].lastElementChild.textContent;
        sum += Number(price);
    }
    let sumArea = document.getElementById('sum');
    sumArea.textContent = sum;
}