function sumFirstLast(input){
    let sum = Number(input.shift()) + Number(input.pop());
    return sum;
}

sumFirstLast(['20', '30', '40'])