function rounding(number, precision){
    if(precision > 15) {
        precision = 15;
    } else {
        number = number.toFixed(precision);
    }
    console.log(parseFloat(number));
}
rounding(10.5, 3);