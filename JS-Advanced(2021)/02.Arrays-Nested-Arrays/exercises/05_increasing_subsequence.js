function increaseSubsequence(arr){
    let result = [];

    for(let num of arr) {
        if(result.length == 0) {
            result.push(num);
        } else {
            if(num >= result[result.length - 1]) {
                result.push(num);
            }
        }
    }

    return result;
}

increaseSubsequence([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
);
