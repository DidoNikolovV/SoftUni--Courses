function fruitFunction(fruit, grams, kgPrice){
    let weight = grams / 1000;
    let money = kgPrice * weight;
    console.log(`I need $${(money).toFixed(2)} to buy ${(weight).toFixed(2)} kilograms ${fruit}.`)
}

fruitFunction('orange', 2500, 1.80);