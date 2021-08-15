function carWash(arr){
    let value = 0;
    for(let i = 0; i < arr.length; i++){
        let currentCommand = arr[i];
        switch(currentCommand){
            case 'soap':
                value += 10;
                break;
            case 'water':
                value *= 1.20;
                break;
            case 'vacuum cleaner':
                value *= 1.25;
                break;
            case 'mud':
                value *= 0.9;
                break;
        }
    }
    let valueInPercent = (value / 100)* 100;
    console.log(`The car is ${(valueInPercent).toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);