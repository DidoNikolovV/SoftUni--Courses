function factorialDivision(num1, num2) {
    function factorial(num){
        let fact = num;
        for(let i = 1; i < num; i++){
            fact *= i;
        }
        return fact;
    }
    
    let result = factorial(num1) / factorial(num2);
    console.log(result.toFixed(2));
}


factorialDivision(5, 2);