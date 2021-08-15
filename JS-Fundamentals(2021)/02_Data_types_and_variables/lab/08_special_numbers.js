function specialNumbers(number) {
   
    for(let i = 1; i <= number; i++) {
        let isSpecial = false;
        let sum = 0;
        let currentNum = i;
        while(currentNum > 0) {
            sum += currentNum % 10;
            currentNum = parseInt(currentNum / 10);
        }

        if(sum === 5 || sum === 7 || sum === 11) {
            isSpecial = true;
           
        }
        console.log(isSpecial ? `${i} -> True` : `${i} -> False`)
    }       
}

specialNumbers(15);