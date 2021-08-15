function piccolo(input){
    let carNumbers = [];
    for(let command of input){
        let[direction, carNumber] = command.split(", ");
        if(direction === "IN") {
            if(!carNumbers.includes(carNumber)){
                carNumbers.push(carNumber);
            }
        } else {
            if(carNumbers.includes(carNumber)) {
                carNumbers.splice(carNumbers.indexOf(carNumber), 1);
            }
        }
    }

    let sortedCars = carNumbers.sort();

    if(carNumbers.length === 0){
        console.log("Parking Lot is Empty");
    } else {
        console.log(carNumbers.join("\n"));
    }

}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)