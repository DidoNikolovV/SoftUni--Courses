function palindromeInteger(arr) { 
    for(let i = 0; i < arr.length; i++){
        let temp = "";
        let currentNum = (arr[i]).toString();
        for(let j = currentNum.length - 1 ; j >= 0 ;j--){
            temp += currentNum[j];
        }
        if(temp == Number(currentNum)){
            console.log(true);
        } else{
            console.log(false);
        }
    }
}

palindromeInteger([123,323,421,121]);