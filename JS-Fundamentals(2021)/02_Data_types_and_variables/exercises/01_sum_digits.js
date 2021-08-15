function sumDigits(number){
    let sum = 0;
    while(number > 0){
        sum += number % 10;
        number  = parseInt(number / 10);
    }
    console.log(sum);
}

sumDigits(245678);