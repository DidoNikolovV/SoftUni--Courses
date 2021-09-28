function calorieObject(arr){
    let productsInfo = {};
    for(let i = 0; i < arr.length; i+=2) {
        let currentProduct = arr[i];
        let calories = Number(arr[i + 1]);
        productsInfo[currentProduct] = calories;
    }

    console.log(productsInfo);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])