function sameNumbers(num){
    let numAsString = num.toString();
    let firstDigit = Number(numAsString[0]);
    let sameDigits = 1;
    let sum = firstDigit;
    for (let i = 1; i < numAsString.length; i++) {
        let currentDigit = Number(numAsString[i]);
        if(currentDigit == firstDigit){
            sameDigits++;
        }   
        sum+= currentDigit; 
    }

    if(sameDigits == numAsString.length) {
        console.log(true);
        console.log(sum);
    } else {
        console.log(false);
        console.log(sum);
    }
}


sameNumbers(1234);