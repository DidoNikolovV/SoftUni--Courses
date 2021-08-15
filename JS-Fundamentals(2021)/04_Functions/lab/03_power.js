function power(a, b){
    let result = 1;
    for(let i = 0; i < b; i++) {
        result = result * a;
    }

    console.log(result);
}

power(2, 8);