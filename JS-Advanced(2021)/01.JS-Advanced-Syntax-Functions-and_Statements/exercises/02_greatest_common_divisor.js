function greatestCommonDivisor(num1, num2){
    let commonDivisor;
    for(let i = 1; i <= num2; i++){
            if(num1 % i == 0 && num2 % i ==0){
                commonDivisor = i;
            }
    }
    console.log(commonDivisor);
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);