function storeProvision(stock, orderedProducts){
    let store = [];
    for(let i = 0; i<stock.length - 1; i+=2){
        let product = stock[i];
        let quantity = Number(stock[i+1]);

        let productObject = {
            product,        
            quantity,
        };

        store.push(productObject);
    }

    for(let i = 0; i < orderedProducts.lenght - 1; i+=2){
        let product = orderedProducts[i];
        let quantity = Number(orderedProducts[i+1]);

        let productObject = {
            product,
            quantity,
        }

        let indexOfProduct = store.findIndex(x => x.product === product);
        if(indexOfProduct === -1) {
            // product does not exist
            store.push(productObject)
        } else {
            // product exist
            store[indexOfProduct].quantity += quantity;
           
        }
    }

    for(let product of store){
        console.log(`${product.product} - > ${product.quantity}`);
    }

}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)