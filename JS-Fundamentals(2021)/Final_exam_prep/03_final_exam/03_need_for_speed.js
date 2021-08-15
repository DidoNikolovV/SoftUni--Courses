function solve(input){
    let nCars = Number(input.shift());

    let cars = {};
    for(let i = 0; i< nCars; i++){
        let [car, mileAge, fuel] = input.shift().split("|")
        mileAge = Number(mileAge);
        fuel = Number(fuel);

        cars[car] = {
            mileAge: mileAge,
            fuel: fuel
        }
    }

    while(input[0] != "Stop") {
        let tokens = input.shift().split(" : ");
        let command = tokens[0];
        let car = tokens[1];

        if(command === "Drive"){
            let distance = Number(tokens[2]);
            let fuel = Number(tokens[3]);

            if(cars[car].fuel >= fuel) {
                cars[car].mileAge += distance;
                cars[car].fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
            } else {
                console.log("Not enough fuel to make that ride" )
            }
            if(cars[car].mileAge >= 100000) {
                delete cars[car];
                console.log(`Time to sell the ${car}!`);
            }
        } else if(command === "Refuel"){
            let fuel = Number(tokens[2]);

            if(cars[car].fuel + fuel > 75) {
                fuel = 75 - cars[car].fuel;
                cars[car].fuel += fuel;
            } else {
                cars[car].fuel += fuel;
            }

            console.log(`${car} refueled with ${fuel} liters`)
        } else if(command === "Revert") {
            let kilometers = Number(tokens[2]);

            if(cars[car].mileAge - kilometers < 10000) {
                cars[car].mileAge = 10000;
            } else {
                cars[car].mileAge -= kilometers;
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }
    }

    let sorted = Object.entries(cars).sort((a, b) => {
        let mileAgeA = a[1].mileAge;
        let mileAgeB = b[1].mileAge;

        let nameA = a[1].car;
        let nameB = b[1].car;

        return (mileAgeB - mileAgeA) || (nameA.localeCompare(nameB))
    })

    for(let [car, key] of sorted) {
        console.log(`${car} -> Mileage: ${key.mileAge} kms, Fuel in the tank: ${key.fuel} lt.`)
    }
}

solve([ 

    '3', 
  
    'Audi A6|38000|62', 
  
    'Mercedes CLS|11000|35', 
  
    'Volkswagen Passat CC|45678|5', 
  
    'Drive : Audi A6 : 543 : 47', 
  
    'Drive : Mercedes CLS : 94 : 11', 
  
    'Drive : Volkswagen Passat CC : 69 : 8', 
  
    'Refuel : Audi A6 : 50', 
  
    'Revert : Mercedes CLS : 500', 
  
    'Revert : Audi A6 : 30000', 
  
    'Stop' 
  
  ])