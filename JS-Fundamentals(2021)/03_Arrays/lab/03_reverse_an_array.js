function reverseArrayNum(n, arr){
    let reversedArr = [];
    for(let i =0; i < n; i++){
        reversedArr[n - i] = arr[i];
    }

    console.log(reversedArr.join(" "));
}

reverseArrayNum(4, [-1,20,99,5]);