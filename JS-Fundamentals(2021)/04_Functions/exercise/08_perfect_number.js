function perfectNumber(num) {
    let positiveDivisors = [];
    let positiveSum = 0;
    for(let i = 1; i < num; i++) {
        if(num % i == 0){
            positiveDivisors.push(i);
            positiveSum += positiveDivisors.pop();
        }
    }
    if(positiveSum == num) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.");
    }

}

perfectNumber(28);
perfectNumber(1236498)