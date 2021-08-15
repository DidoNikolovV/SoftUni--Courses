function condenseArrToNum(arr){
    let i = 0;
    while(arr.length != 1) {
        if(i + 1 == arr.length){
            arr.pop();
            i = 0;
        }
        else {
            arr[i] = arr[i] + arr[i + 1];
            i++;
        }
    }
    let result = arr[0];
    console.log(result);
}

condenseArrToNum([1]);