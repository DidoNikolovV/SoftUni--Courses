function processOddNums(arr){
   let newArr = [];
    for(let i = 0; i < arr.length; i++){
       if(i % 2 == 1){
            newArr.push(arr[i] * 2);
       }
   }

   newArr.reverse();
   console.log(newArr.join(" "));
}

processOddNums([3, 0, 10, 4, 7, 3])