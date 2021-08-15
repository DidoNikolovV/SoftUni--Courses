function triangleOfNums(number){
    for(let i = 1; i <= number; i++){
        let numbers = ""
        for(let j = 1; j <= i; j++){
            numbers += i + " ";
        }
        console.log(numbers)
    }
}

triangleOfNums(3)