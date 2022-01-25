import {getUserData, setUserData, clearUserData} from './util.js';

const hostname = 'http://localhost:3030';

async function request(url, options) {
    const res = await fetch(hostname + url, options);

    try {
        if(res.o == false) {
            const error = await res.json();
            throw new Error(error.message);
        }
    
        if(res.status == 204) {
            return res;
        } else {
            return res.json();
        }
    } catch(err) {
        alert(error.message);
        throw(err);
    }  
}

async function createOptions(method ='get', data) {
    const options = {
        method,
        headers: {},
    }

    if(data) { 
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData =  getUserData();

    if(userData) {
       options.headers['X-Authorization'] = userData.token;
    }

    return options;
}

async function get(url) {
    return request(url, createOptions());
}
async function post(url, data) {
    return request(url, createOptions('post', data));
}
async function put(url, data) {
    return request(url, createOptions('put', data));
}
async function del(url) {
    return request(url, createOptions('delete'));
}


export async function login(email, password) {
   const result = await get('/users/login');

   const userData = {
       email: result.email, 
       password: result.password,
       id: result._id,
       token: result.accessToken
   }

   setUserData(userData);
   return result;
}

export async function register(email, password) {
    const result = await post('/users/register', {email, password});


    const userData = {
        email: result.email, 
        password: result.password,
        id: result._id,
        token: result.accessToken
    }
 
    setUserData(userData);
    return result;
 }

export async function logout(){
    await get('/users/logout');
    clearUserData();
}
