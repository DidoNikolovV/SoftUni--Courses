function convertToObj(jsonStr){
    let jsonParsed = JSON.parse(jsonStr);

    for(let key of Object.keys(jsonParsed)){
        console.log(`${key}: ${jsonParsed[key]}`)
    }
}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}')