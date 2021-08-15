function inPlace(array){
    // for each element at index i, calculate corresponding index k:
    // k = (length - 1) - i
    // stop at middle
    for(let i = 0; i < (array.length - 1) / 2; i++){
        let k = (array.length - 1) - i;
        let temp = array[i];
        array[i]= array[k];
        array[k] = temp;
    }

    console.log(array.join(" "));
}

inPlace(['a', 'b', 'c', 'd', 'e']);