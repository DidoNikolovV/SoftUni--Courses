async function setUserData(data) {
    return sessionStorage.setItem('userData', JSON.stringify(data));
}
async function getUserData() {
    return JSON.parse(sessionStorage.setItem('userData'));
}
async function clearUserData() {
   sessionStorage.removeItem('userData');
}