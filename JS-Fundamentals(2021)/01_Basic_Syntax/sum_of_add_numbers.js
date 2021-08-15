function oddSum(n){
    let num = 1;
    let total = 0;
    for(let i = 0; i <n; i++){
        console.log(num);
        total += num;
        num +=2;
    }
    console.log(`Sum: ${total}`);
    
}

oddSum(5);