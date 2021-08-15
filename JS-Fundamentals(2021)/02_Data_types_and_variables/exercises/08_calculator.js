function calculator(num1, operator, num2){
    let result = 0;
    switch(operator){
        case '-':
            result = num1 - num2;
            break;
        case '+':
            result = num1 + num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            console.log("Not a valid operation..");
    }
    console.log(result.toFixed(2));
}

calculator(25.5,
    '-',
    3
    )