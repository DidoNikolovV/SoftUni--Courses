function minorTask(input){
    let resourceObj = {};
    for(let i = 0; i < input.length; i+= 2) {
        let currentResource = input[i];
        let quantity = Number(input[i + 1]);
        if(resourceObj.hasOwnProperty(currentResource)) {
            resourceObj[currentResource] += quantity;
        } else {
            resourceObj[currentResource] = quantity; 
        }
        
    }

    for(let [resource, quantity] of Object.entries(resourceObj)) {
        console.log(`${resource} -> ${quantity}`);
    }
}

minorTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
    )