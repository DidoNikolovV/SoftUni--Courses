function solve(input){
    let cities = {};

    while(input[0] != "Sail"){
        let [city, population, gold] = input.shift().split("||");
        population = Number(population);
        gold = Number(gold);

        if(cities[city] != undefined){
            cities[city].population += population;
            cities[city].gold += gold;
        } else {
            cities[city] = {
                gold,
                population
            }
        }
    }

    let removeSail = input.shift();
    
    while(input[0] != "End"){
        let tokens = input.shift().split("=>");
        let command = tokens[0];
        let town = tokens[1];

        if (command === "Plunder"){
            let people = Number(tokens[2]);
            let gold = Number(tokens[3]);

            cities[town].gold -= gold;
            cities[town].population -= people;

            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`)

            if((cities[town].gold <= 0) || (cities[town].population <= 0)) {
                delete cities[town];
                console.log(`${town} has been wiped off the map!`)
            }
        }
        else if(command === "Prosper") {
            let gold = Number(tokens[2]);

            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                cities[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
            }
        }
    }

    if(Object.keys(cities).length != 0) {
        let sorted = Object.entries(cities).sort((a, b) => {
            let goldA = a[1].gold;
            let goldB = b[1].gold;

            let nameA = a[0];
            let nameB = b[0];

            return (goldB - goldA) || (nameA.localeCompare(nameB));
        })
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);

        for(let [name, key] of sorted) {
            console.log(`${name} -> Population: ${key.population} citizens, Gold: ${key.gold} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }

}

/*solve((["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])
)*/

solve((["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])
)