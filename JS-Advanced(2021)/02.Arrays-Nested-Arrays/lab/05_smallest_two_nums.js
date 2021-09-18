function smallestTwoNums(input){
    let smallestTwo = input.sort((a, b) => a - b).slice(0, 2);
    console.log(smallestTwo.join(' '));
}

smallestTwoNums([30, 15, 50, 5]);
smallestTwoNums([3, 0, 10, 4, 7, 3]);
