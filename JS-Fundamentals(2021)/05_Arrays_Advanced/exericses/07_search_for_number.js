function searchNum(arr1, arr2){
    let numElements = arr2[0];
    let numElementsToDelete = arr2[1];
    let searchedNum = arr2[2];

    arr1.splice(numElements,numElementsToDelete);

    let count = 0;
    for(let i = 0; i < arr1.length; i++){
        let currentElement = Number(arr1[i]);
        if(currentElement === searchedNum) {
            count++;
        }
    }

    console.log(`Number ${searchedNum} occurs ${count} times.`)
}

searchNum([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )