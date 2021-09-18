function biggerHalf(input){
    let sortedArray = input.sort((a, b) => a-b);
    let biggerHalf = sortedArray.slice(sortedArray.length / 2);
    return biggerHalf;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);