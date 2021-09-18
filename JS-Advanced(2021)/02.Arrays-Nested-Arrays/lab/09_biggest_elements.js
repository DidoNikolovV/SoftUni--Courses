function biggestElement(input){
    let biggestNum = Number.MIN_SAFE_INTEGER;
    for(let row of input){
        for(let col of row) {
            if(col > biggestNum) {
                biggestNum = col;
            }
        }
    }

    return biggestNum;
}

biggestElement([[20, 50, 10],
    [8, 33, 145]]
   )

   biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   )