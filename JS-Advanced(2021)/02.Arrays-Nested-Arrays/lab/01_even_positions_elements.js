function evenPositions(input){
    let result = [];
    for (let index = 0; index < input.length; index+=2) {
        result.push(input[index]);
    }

    console.log(result.join(' '));
}

evenPositions(['20', '30', '40', '50', '60'])
