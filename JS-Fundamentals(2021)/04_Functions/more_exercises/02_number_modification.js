function numberModification(number){
    let numToStr = number.toString();
    let averageSum = 0;
    for(let i = 0; i < numToStr.length; i++){
        averageSum += Number(numToStr);
    }
    averageSum /= numToStr.length;
    console.log(averageSum);
}

numberModification(101);

