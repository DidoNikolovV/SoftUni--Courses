function sum(num){
    function oddDigitsSum(num){
        let numToStr = num.toString();
       
        let oddSum = 0;
        for(let i = 0; i < numToStr.length; i++){
            if(Number(numToStr[i]) % 2 != 0) {
                oddSum += Number(numToStr[i]);
            }
        }
        return oddSum;
    }
    function evenDigitsSum(num){
        let numToStr = num.toString();
        let evenSum = 0;
        for(let i = 0; i < numToStr.length; i++){
            if(Number(numToStr[i]) % 2 == 0) {
                evenSum += Number(numToStr[i]);
            }
        }
        return evenSum;
    }

    let oddSum = oddDigitsSum(num);
    let evenSum = evenDigitsSum(num);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

sum(3495892137259234);




