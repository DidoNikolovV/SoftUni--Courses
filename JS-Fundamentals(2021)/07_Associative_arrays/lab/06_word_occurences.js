function wordOccurences(input){
    let myMap = new Map();

    for(let word of input){
        if(myMap.has(word)){
            let currentOccurance = myMap.get(word);
            currentOccurance += 1;
            myMap.set(word, currentOccurance);
        } else {
            myMap.set(word, 1);
        }
    }

    let sorted = Array.from(myMap).sort((a, b) => b[1]- a[1]);
    for(let item of sorted){
        let word = item[0];
        let occurance = Number(item[1]);
        console.log(`${word} -> ${occurance} times`);
    }

}

wordOccurences(["Here", "is", "the", "first", "sentence", 
"Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])