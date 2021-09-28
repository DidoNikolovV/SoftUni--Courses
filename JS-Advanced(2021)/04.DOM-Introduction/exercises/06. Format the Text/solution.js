function solve() {
    let textAreaElement = document.getElementById('input').value.split(".");
    
    let outputElement = document.getElementById('output');

    let text = "";
    counter = 0;
    for(let i = 0; i <= textAreaElement.length; i++) {
        let sentance = textAreaElement[i];
        if(counter == 3 || i == textAreaElement.length) {
          outputElement.innerHTML += `<p>${text}</p>`;
          text = "";
          counter = 0;
        }

        text += sentance + ".";
        counter++;
    }
}
