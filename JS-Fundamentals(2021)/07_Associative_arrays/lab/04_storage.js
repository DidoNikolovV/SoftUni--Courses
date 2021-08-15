function storage(input){
    let myStore = new Map();
    for(let product of input){
        let item = product.split(" ")[0];
        let quantity = Number(product.split(" ")[1])
        if(myStore.has(item)){
           let result = myStore.get(item) + quantity;
           myStore.set(item, result);
           
        } else {
            myStore.set(item, quantity);
        }
    }
    for(let kvp of myStore){
        console.log(`${kvp[0]} -> ${kvp[1]}`)
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)