function sumEven(arrayStrings){
    let sum = 0;
    for(let i = 0; i <arrayStrings.length; i++){
        arrayStrings[i] = Number(arrayStrings[i]);
    }

    for(let num of arrayStrings){
        if(num % 2 == 0){
            sum += num;
        }
    }

    console.log(sum);
}

sumEven(['1', '2', '3', '4','5', '6']);