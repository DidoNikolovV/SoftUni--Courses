function cookingByNumbers(num, ...operations){
    let number = Number(num);
    let operationsObj = {
        'chop': chop(number),
        'dice': dice(number),
        'spice': spice(number),
        'bake': bake(number),
        'fillet': fillet(number)
    }

    for (const operation of operations) {
        operationsObj[operation];
    }

    function chop(x){
        number /= 2;
        console.log(number);
    }

    function dice(x){
        number ** 2;
        console.log(number);
    }

    function spice(x){
        number +=1;
        console.log(number);
    }

    function bake(x){
        number *= 3;
        console.log(number);
    }
    
    function fillet(x){
        number *= 0.8;
        console.log(number);
    }
   


}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');