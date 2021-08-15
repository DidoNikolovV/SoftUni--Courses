function solve(input){
    // parse initial catalog
    // determine number of initial pieces
    // - for the next n lines, parse input and store piece in catalog


    let catalog = {};
    let n = Number(input.shift());
    for(let i = 0; i < n; i++){
        let [name, composer, key] = input.shift().split("|");
        catalog[name] = {
            composer: composer,
            key: key
        }
    }

    // parse commands
    // - for each line, until 'Stop' is received
    // -- determine command
    // -- execute operation, using given parameters

    while(input[0] != "Stop") {
        let tokens = input.shift().split("|");
        let command = tokens[0];
        let name = tokens[1];
        
    

        if(command === "Add"){
            let composer = tokens[2];
            let key = tokens[3];
            if(catalog[name] != undefined){
                console.log(`${name} is already in the collection!`);
            } else {
                catalog[name] = {
                    composer,
                    key
                }
                console.log(`${name} by ${composer} in ${key} added to the collection!`);
            }
        } else if(command === "Remove") {
            if(catalog[name] != undefined) {
                delete catalog[name];
                console.log(`Successfully removed ${name}!`);
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        } else if(command === "ChangeKey") {
            let newKey = tokens[2];
            if(catalog[name] != undefined) {
                catalog[name].key = newKey;
                console.log(`Changed the key of ${name} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        }
    }
    
    // sort catalog
    // - convert object into array
    // - sort array based on lexicographical order of piece name and then composer name
    let sorted = Object.entries(catalog).sort((a, b) => {
        let nameA = a[0];
        let nameB = b[0];

        let composerA = a[1].composer;
        let composerB = b[1].composer;

        return (nameA.localeCompare(nameB)) || (composerA.localeCompare(composerB));

    })


    // print result
    // - for each element of sorted result, print information
    for(let [name, key] of sorted) {
        console.log(`${name} -> Composer: ${key.composer}, Key: ${key.key}`);
    }
    // Add
    // - parse parameters
    // - if piece exists, print error
    // - else, add new piece to catalog

    // Remove
    // - parse parameters
    // - if piece DOES NOT exist, print error
    // - else, remove piece from catalog

}

solve([ 

    '3', 
  
    'Fur Elise|Beethoven|A Minor', 
  
    'Moonlight Sonata|Beethoven|C# Minor', 
  
    'Clair de Lune|Debussy|C# Minor', 
  
    'Add|Sonata No.2|Chopin|B Minor', 
  
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor', 
  
    'Add|Fur Elise|Beethoven|C# Minor', 
  
    'Remove|Clair de Lune', 
  
    'ChangeKey|Moonlight Sonata|C# Major', 
  
    'Stop'   
  
  ])