function orders(product, qty) {
    // get product price
    let price = getPrice(product);
   
    // calculate total
    let total = calculateTotal(price, qty);

    // print result
    console.log((total).toFixed(2));
}

function getPrice(product) {
    switch(product) {
        case 'water':
            return 1.00;
        case 'coffee':
            return  1.50;
          
        case 'coke':
            return 1.40;
            
        case 'snacks':
            return 2.00;          
    }
}

function calculateTotal(price, quantity) {
    return total = price * quantity;
}

orders('water', 5);





