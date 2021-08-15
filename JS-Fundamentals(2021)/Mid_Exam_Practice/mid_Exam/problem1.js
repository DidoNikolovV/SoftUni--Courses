function solve1(input){
    let biscuitsPerDay = Number(input.shift());
    let workersCount = Number(input.shift());
    let competingFactoryProduced = Number(input.shift());

    let production = 0;
    for(let i = 1; i <= 30; i++){
        

        if(i % 3 === 0){
            production += Math.floor(biscuitsPerDay * workersCount * 0.75);
        } else {
            production += Math.floor(biscuitsPerDay * workersCount);
        }
    }

    console.log(`You have produced ${production} biscuits for the past month.`);

    let percentage = Math.abs((production - competingFactoryProduced) / competingFactoryProduced * 100);

    if(production > competingFactoryProduced){
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`)
    } else {
        console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`)
    }
    
}



solve1((["65",
"12",
"26000"])
)


