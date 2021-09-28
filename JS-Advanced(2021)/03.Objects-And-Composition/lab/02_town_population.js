function townPopulation(input){
    let townsObj = {};
    input.forEach(element => {
        let [city, population] = element.split(' <-> ');
        population = Number(population);
        if(townsObj[city] == undefined) {
            townsObj[city] = population;
        } else {
            townsObj[city] += population;
        }
    });

    for(let town in townsObj) {
        console.log(`${town} : ${townsObj[town]}`);
    }
}

// console.log(townPopulation(['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000']
// ));

console.log(townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
))