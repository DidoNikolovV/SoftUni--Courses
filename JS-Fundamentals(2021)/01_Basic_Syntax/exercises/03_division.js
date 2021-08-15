function division(number){
    let divisionNumber = 2;
    if(number % 2 != 0 && number % 3 != 0 && number % 6 != 0 && number % 7 != 0 && number & 10 !=0){
        console.log("Not divisible");
    }
    else {
        if(number % 3 == 0) {
            divisionNumber = 3;
        }
        if(number % 6 == 0) {
            divisionNumber = 6;
        }
        if(number % 7 == 0) {
            divisionNumber = 7;
        }
        if(number % 10 == 0) {
            divisionNumber = 10;
        }
        console.log(`The number is divisible by ${divisionNumber}`);
    }
}

division(1643);
