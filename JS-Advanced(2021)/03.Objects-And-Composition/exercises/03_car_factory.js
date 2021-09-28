function carFactory(obj){
    let givenColor = '';
    let engine = '';
    let carriage = '';

    // Choosing an engine
    if(obj.power <= 90) {
        engine = 'Small engine';
    } else if(obj.power > 90 && obj.power <= 120) {
        engine = 'Normal engine';
    } else if(obj.power <= 200) {
        engine = 'Monster engine';
    }

    let engines = {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 }
    }

    // Choosing a carriage
      if(obj.carriage == 'hatchback') {
        carriage = 'Hatchback';
        givenColor = obj.color;
    } else {
        carriage = 'Coupe';
        givenColor =  obj.color;
    }

    let carriages = {
        'Hatchback': { type: 'hatchback', color: `${givenColor}`},
        'Coupe': { type: 'coupe', color: `${givenColor}`},
    }
    
    // Creating the wheels
    let wheels = [];
    let wheelSize = obj.wheelsize;
    if(obj.wheelsize % 2 == 0) {
        wheelSize -= 1;
    }

    for(let i = 0; i < 4; i++) {
        wheels.push(wheelSize);
    }


    let carObj = {
        model: obj.model,
        engine: engines[engine],
        carriage: carriages[carriage],
        wheels: wheels
    }

    return carObj;
}

carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
);

console.log('----------');

carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
)