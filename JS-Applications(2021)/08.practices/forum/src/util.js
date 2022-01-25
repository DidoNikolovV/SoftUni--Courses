
export function getUserData(){
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function setUserData(userData){
    return sessionStorage.setItem('userData', JSON.stringify(userData));
}

export function clearUserData() {
    sessionStorage.removeItem('userData');
}

export function parseQueryString(string) {
    const params = string
    .split('&')
    .map(p => p.split('='))
    .reduce((a, [k, v]) => Object.assign(a, {[k]: v}), {});

    return (params);
}

export function createSubmitHandler(callback, ...fieldNames) {
    return function(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const result = {};
        for(let field of fieldNames) {
            result[field] = formData.get(field).trim();
        }
        callback(result, e);
    }
}