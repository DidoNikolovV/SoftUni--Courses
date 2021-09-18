function negativePositive(input){
    let result = [];
    input.forEach(element => element < 0 ? result.unshift(element) : result.push(element));

    console.log(result.join('\n'));
}

negativePositive([7, -2, 8, 9]);