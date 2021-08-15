function smallestTwoNums(arr){
    let result = arr.sort((a,b) => a-b);
    let sliced = result.slice(0,2);
    console.log(sliced.join(" "));

}

smallestTwoNums([30, 15, 50, 5])
smallestTwoNums([3, 0, 10, 4, 7, 3])