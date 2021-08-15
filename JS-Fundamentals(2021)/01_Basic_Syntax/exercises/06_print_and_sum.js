function printAndSum(startNumber, endNumber){
    let numberStr = "";
    let numbersSum = 0;
    for(let i = startNumber; i <= endNumber; i++){
        numberStr += ` ${i}`;

        numbersSum +=i;
    }

    console.log(numberStr);
    console.log(`Sum: ${numbersSum}`);
}

printAndSum(5, 10);