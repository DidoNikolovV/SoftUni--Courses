function squareOfStars(size){
    if(size === undefined) {
        size = 5;
    }

    for(let i = 0; i < size; i++){
        console.log('* '.repeat(size));
    }
}

squareOfStars(1);
squareOfStars(2);
squareOfStars(5);