function addAndSubtract(arr){
    let originalSum = 0;
    let modifiedArray = [];
    let modifiedSum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0) {
           modifiedArray.push(arr[i] + i);
        } else{
            modifiedArray.push(arr[i] - i);
        }
    }
    
    for(num of arr) {
        originalSum += num;
    }
    for(num of modifiedArray) {
        modifiedSum += num;
    }

    console.log(modifiedArray)
    console.log(originalSum);
    console.log(modifiedSum);

}

addAndSubtract([5,15,23,56,35])
addAndSubtract([-5,11,3,0,2]);