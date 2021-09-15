function circleArea(input){
    let circleArea;
    if(typeof(input) == 'number'){
        circleArea = Math.PI * input ** 2;
        console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`);
    }    
}

circleArea(5);
circleArea('name');