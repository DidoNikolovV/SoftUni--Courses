function argumentInfo(...params) {
    // hold types
    let occurences = "";
    // array to hold result
    let result = [];
    params.forEach(el => {
        //2. get param type
        let type = typeof(el);
        //2a. push into results arr
        result.push(`${type}: ${el}`)
        // increase type count in occurences obj
        occurences[type] = occurences[type] !== undefined ? occurences[type] + 1 : 1;
    })

    //4. get occurence keys ('string', 'number' .. etc)
    Object.keys(occurences).sort((a, b) => occurences[b] - occurences[a])
    .forEach(key => result.push(`${key} = ${occurences[key]}`))

    return result.join("\n");
    
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });

