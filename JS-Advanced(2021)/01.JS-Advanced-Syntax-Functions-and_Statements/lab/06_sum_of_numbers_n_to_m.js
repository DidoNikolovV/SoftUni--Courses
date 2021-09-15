function sumOfNumbers(n, m){
    let start = Number(n);
    let end = Number(m);
    let sum = 0;

    for (let index = start; index <= end; index++) {
        let currentNum = index;
        sum += currentNum;
    }

    console.log(sum);
}

sumOfNumbers('1', '5');
sumOfNumbers('-8', '20');