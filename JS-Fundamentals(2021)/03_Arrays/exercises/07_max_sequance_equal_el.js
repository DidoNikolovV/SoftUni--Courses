function maxSequance(arr){
    let firstNum = arr[0];
    let newArr = [];
    newArr[0] = firstNum;
    for(let i = 1; i < arr.length; i++){ 
        if(arr[i] === newArr[0]) {
            newArr.push(arr[i]);
        } else {
            if(i+1 == arr.length && arr[i] != newArr[0]) {
                break;
            } else {
                newArr.shift();
                newArr.push(arr[i]);
            }
            
        }
    }
    console.log(newArr.join(" "));
}

maxSequance([1, 1, 1, 2, 3, 1, 3, 3]);