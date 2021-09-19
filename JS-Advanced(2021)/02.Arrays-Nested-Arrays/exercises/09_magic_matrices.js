function magicMatrices(matrix){
    let isMagic = true;
    for(let row = 0; row < matrix.length; row++){
        let colSum = 0;
        let rowSum = 0;
        for(let col = 0; col < matrix[row].length; col++){
            colSum += matrix[col][row];
            rowSum += matrix[row][col];
        }
        if(colSum !== rowSum) {
            isMagic = false;
            break;
        }
    }

    if(isMagic == false) {
        console.log('false');
    } else {
        console.log('true');
    }  
}

magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
)

magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
)

magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   )