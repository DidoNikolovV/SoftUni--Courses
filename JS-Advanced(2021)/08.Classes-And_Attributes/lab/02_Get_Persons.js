const Person = require('./01_Person');

function foo(){
    const data = [
        ['Anna', 'Simpson', 22, 'anna@yahoo.com'],
        ['Softuni'],
        ['Stephan', 'Johnson', 25],
        ['Gabriel', 'Peterson', 24, 'g.p@gmail.com']
    ]

    return data.map(x => new Person(...x));
}

console.log(foo());





