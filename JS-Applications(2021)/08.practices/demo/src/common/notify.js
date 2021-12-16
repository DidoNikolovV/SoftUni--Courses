const element = document.createElement('div');
element.id = 'notification';
const msg = document.createElement('span');
const closeBtn = document.createElement('span');
closeBtn.classList = 'close-btn';
closeBtn.innerHTML =  ' &#9747';
element.appendChild(msg);
element.appendChild(closeBtn);

closeBtn.addEventListener('click', clear);


export function notify(message) {
    msg.textContent = message;
    document.body.appendChild(element);

    setTimeout(clear, 3000);
}

export function clear() {
    element.remove();
}

