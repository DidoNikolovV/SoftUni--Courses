function maxNumber(arr){
    let newArr = [];
    let elements = arr.length;
   
    for(let i = 0; i < elements; i++){
        let isBigger = true;
        let current = arr[i];
        for(let j = i+1; j < arr.length;j++){
            if(current > arr[j]){
                continue;
            } else{
                isBigger = false;
                break;
            }
        }
        if(isBigger){
            newArr.push(current);
        }
      
    }
    console.log(newArr.join(" "));
}

maxNumber([41, 41, 34, 20]);