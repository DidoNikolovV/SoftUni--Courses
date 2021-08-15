function computerStore(input){
    let line = input.shift();
    let totalPrice = 0;
    let totalPriceWithTaxes = 0;
    let taxes = 0;
    while(line != "regular" && line != "special"){
        let price = Number(line);

        if(price < 0){
            console.log("Invalid price!");
        } else {
            totalPrice += price;
            taxes += price * 0.2;
        }
       
        line = input.shift();
    }

    totalPriceWithTaxes = totalPrice + taxes;
    if(line == "special"){
        totalPriceWithTaxes *= 0.9;
    }
    if(totalPrice == 0) {
        console.log("Invalid order!");
    } else {
        console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${totalPrice.toFixed(2)}$
        Taxes: ${taxes.toFixed(2)}$
        -----------
        Total price: ${totalPriceWithTaxes.toFixed(2)}$`)
    }
}

computerStore([
    '1050', 
    '200', 
    '450',
    '2', 
    '18.50', 
    '16.86', 
    'special'
    ]
    )

/*computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ]
    )*/