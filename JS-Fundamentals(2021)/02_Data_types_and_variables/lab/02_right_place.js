function rightPlace(word, char, string){
    let newString = "";
    for(let i = 0; i < word.length; i++){
        if(word[i] === '_'){
            newString += char;
        } else {
            newString += word[i];
        }
    }
    
    if(newString === string) {
        console.log("Matched");
    } else {
        console.log("Not Matched")
    }
}


rightPlace('Str_ng', 'i', 'String')