function extractText() {
    let listElements = Array.from(document.getElementById('items').children);
    let result = [];
    for (const el of listElements) {
        result.push(el.textContent);
    }

    let resultArea = document.getElementById('result');
    resultArea.value = result.join("\n");
}