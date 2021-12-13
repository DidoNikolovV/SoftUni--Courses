async function request(url, options) {
    try {
        const res = await fetch(url, options);

        if(res.ok != true) {
            const error = await res.json();
            throw new Error(error);
        }
    } catch(err){

    }
}