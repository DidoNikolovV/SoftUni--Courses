function notify(message) {
    let notificationElement = document.getElementById('notification');
    notificationElement.textContent = message;

    notificationElement.addEventListener('click', () => {
      notificationElement.style.display = 'none';
    })

    notificationElement.style.display = 'block';
}