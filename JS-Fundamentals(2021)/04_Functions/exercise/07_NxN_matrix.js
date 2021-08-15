function printMatrix(n) {
    let matrix = [];
    for(let i = 0; i < n; i ++){
        let temp = "";
        for(let j = 0; j < n; j++) {
            matrix.push(n);
            temp += matrix.pop() + " ";
        }
        console.log(temp);
    }
}

printMatrix(3);