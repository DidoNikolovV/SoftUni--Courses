function lowestPrices(arr) {
    let townObj = {};
    for(let element of arr) {
        let [town, product, price] = element.split(" | ");
        price = Number(price);

        townObj[product] = {
            price,
            town 
        }

       
    }
    let values = Object.values(townObj).sort((a, b) => {
        return a[0] - b[0];
    });
    console.log(values);

    // console.log(townObj);
}

lowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);

