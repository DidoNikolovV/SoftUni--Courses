function pascalCase(text){
    let result = [];
    let lower = text.toLocaleLowerCase();
    let word = "";
    for(let i = 0; i < text.length; i++) {
        if(text[i] != lower[i]){
            if(word.length > 0){
                result.push(word);
            }
            word = text[i];
        } else {
            word += text[i];
        }        
    }

    if(word.length > 0){
        result.push(word);
    }

    console.log(result.join(", "));
}

pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')