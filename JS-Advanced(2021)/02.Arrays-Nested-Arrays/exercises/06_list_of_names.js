function listOfNames(arr){
    let sortedNames = arr.sort((a, b) => a.localeCompare(b));
    sortedNames.forEach((x, i) => console.log(`${i + 1}.${x}`));

}

listOfNames(["John", "Bob", "Christina", "Ema"]);