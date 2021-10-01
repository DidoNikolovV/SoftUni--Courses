function encodeAndDecodeMessages() {
    let givenMessage = document.querySelectorAll('#main div')[0].children[1];
    let receivedMessage = document.querySelectorAll('#main div')[1].children[1];
    let encodeButton = document.querySelectorAll('#main div')[0].children[2];
    let decodeButton =document.querySelectorAll('#main div')[1].children[2];
    encodeButton.addEventListener('click', encodeMessage);
    decodeButton.addEventListener('click', decodeMessage);



    function encodeMessage(e){
        let message = Array.from(e.target.parentElement.querySelector('textarea').value);
        let decodedMessage = document.createElement('p');
        for(let letter of message){
            letter = String.fromCharCode(letter.charCodeAt(0) + 1);
            decodedMessage.textContent += letter;
        }
        receivedMessage.value = decodedMessage.textContent;
        givenMessage.value = '';
    }

    function decodeMessage(e){
        let message = Array.from(e.target.parentElement.querySelector('textarea').value);
        let decodedMessage = document.createElement('p');
        for(let letter of message){
            
            letter = String.fromCharCode(letter.charCodeAt(0) - 1);
            decodedMessage.textContent += letter;
        }
        
       receivedMessage.value = decodedMessage.textContent;
    }
}