function sorting(arr){
    let sortedNumbers = [];
    let numbersLength = arr.length;
    for(let i = 0; i < numbersLength; i++){
        let number;
        if(i % 2 == 0) {
            number = Math.max(...arr);
        } else {
            number = Math.min(...arr);
        }
        sortedNumbers.push(number);

        arr.splice(arr.indexOf(number), 1);
    }
    console.log(sortedNumbers.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])