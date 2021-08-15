function plantDiscovary(input){
    let actions = {
        "Rate": rate,
        "Update": update,
        "Reset": reset
    }

    let catalog = {};

    let n = Number(input.shift());
    for(let i = 0; i < n; i++){
        let [name, rarity] = input.shift().split("<->");

        catalog[name] = {
            rarity: Number(rarity),
            ratings: [],
            avgRating: 0
        }
    }

    // parse second part of input, updating the catalog, according to commands
    // - for each remaining input element, until 'Exhibition' is reached:
    // -- parse input, to determine command
    // -- perform given command with given parameters

    while(input[0] != "Exhibition") {
        let [command, params] = input.shift().split(": ")
        let action = actions[command];
        action(params);
    }


    // sort catalog
    // - convert catalog to array
    // - pass compare function into sorting operation
    // -- return difference between plant's rarity
    // -- if rarity is the same, return difference between plant's average rating
    let sorted = Object.entries(catalog).sort(comparePlants);

    // print result
    // - print static line
    // - for each plant of the sorted array, print stats
    console.log("Plants for the exhibition:");
    for(let [name, plant] of sorted) {
        console.log(`- ${name}; Rarity: ${plant.rarity}; Rating: ${(plant.avgRating).toFixed(2)}`);
    }


    function comparePlants(a, b){
        let rarityA = a[1].rarity;
        let rarityB = b[1].rarity;

        let ratingsA = a[1].avgRating;
        let ratingsB = b[1].avgRating;

        return (rarityB - rarityA) || (ratingsB - ratingsA);
    }


    // Rate
    // - parse parameters to determine plant name and given string
    // - if the plant exists in the catalog, add given rating( as number)
    function rate(line){
        let [name, rating] = line.split(" - ");

        if(catalog[name] != undefined) {
            let plant = catalog[name];
            plant.ratings.push(Number(rating));

            let total = 0;
            for(let rating of plant.ratings){
                total += rating;
            }

            plant.avgRating = total / plant.ratings.length;

        }
        else {
            console.log("error");
        }
    }

    function update(line){
        let [name, rarity] = line.split(" - ");

        if(catalog[name] != undefined) {
            let plant = catalog[name];
            plant.rarity = Number(rarity);
        }
        else {
            console.log("error");
        }
    }

    function reset(name){
        if(catalog[name] != undefined){
            let plant = catalog[name];
            plant.ratings.length = 0;
            plant.avgRating = 0;
        } else {
            console.log("error");
        }
    }

}

plantDiscovary(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])
