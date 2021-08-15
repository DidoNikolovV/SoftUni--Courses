function negativePositiveNums(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let current = Number(arr[i]);
        if(current >= 0) {
            result.push(current);
        } else {
            result.unshift(current)
        }
    }

    console.log(result.join("\n"))
}

negativePositiveNums([7, -2, 8, 9])