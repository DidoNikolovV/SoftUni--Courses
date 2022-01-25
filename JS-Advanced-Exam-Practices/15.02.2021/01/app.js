function solution() {
    let addGiftBtn = document.querySelectorAll('section.card')[0].querySelector('div button');
    addGiftBtn.addEventListener('click', addGift);
    // let giftInput = document.querySelectorAll('section.card')[0].querySelector('div input');
    let listOfGfts = document.querySelectorAll('section.card')[1].querySelector('ul');


    function addGift(e) {
        e.preventDefault();
        let giftInput = e.target.parentElement.querySelector('input');
        let giftLi = document.createElement('li');
        giftLi.classList.add('gift');
        giftInput.classList.add('name');
        giftLi.textContent = giftInput.value;
        let sendBtn = document.createElement('button');
        sendBtn.addEventListener('click', sendGifts);
        sendBtn.setAttribute('id', 'sendButton');
        sendBtn.textContent = 'Send';

        let discardBtn = document.createElement('button');
        discardBtn.addEventListener('click', discardGifts);
        discardBtn.setAttribute('id', 'discardButton');
        discardBtn.textContent = 'Discard';
        giftLi.appendChild(sendBtn)
        giftLi.appendChild(discardBtn);

        listOfGfts.appendChild(giftLi);

        let sortedGifts = Array.from(listOfGfts.children).sort((a, b) => a.textContent.localeCompare(b.textContent));
        sortedGifts.forEach(gift => listOfGfts.appendChild(gift));


        giftInput.value = "";
    }

    function sendGifts(e) {
        let sentGiftsUl = document.querySelectorAll('section.card')[2].querySelector('ul');
        let giftNameLi = document.createElement('li');
        let giftName = e.target.parentElement.textContent.replace("Send", "").replace("Discard","").trim();
        giftNameLi.textContent = giftName;
        sentGiftsUl.appendChild(giftNameLi);

        listOfGfts.removeChild(e.target.parentElement);
    }

    function discardGifts(e) {
        let discardGiftsUl = document.querySelectorAll('section.card')[3].querySelector('ul');
        let giftNameLi = document.createElement('li');
        let giftName = e.target.parentElement.textContent.replace("Send", "").replace("Discard","").trim();
        giftNameLi.textContent = giftName;
        discardGiftsUl.appendChild(giftNameLi);

        listOfGfts.removeChild(e.target.parentElement);
    }


}