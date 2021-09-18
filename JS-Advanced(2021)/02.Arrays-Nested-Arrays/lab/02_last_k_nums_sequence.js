function lastKNums(n, k){
    let newSequence = [1];
    
    for(let i = 1; i < n; i++){
        let previousNumsSum = 0;
        if(k > newSequence.length){
            for(let num of newSequence) {
                previousNumsSum += num;
            }
        } else {
            let start = newSequence.length - k;
            for(let j = start; j < newSequence.length; j++){
                previousNumsSum += newSequence[j];
            }
        }
        newSequence[i] = previousNumsSum;
    }

    return newSequence;
}

console.log(lastKNums(6, 3));