function fuel(distance, passengers, pricerPerLiter) {
    let consumption = passengers * 0.100;
    let required = (distance / 100) * (7 + consumption);
    let neededMoney = required * pricerPerLiter;



    console.log(`Needed money for that trip is ${(neededMoney).toFixed(2)}lv.`)
}

fuel(260, 9, 2.49);