function strSubstring(searchedWord, text){
    let word = text.split(" ").map(x => x.toLocaleLowerCase()).filter(x => x == searchedWord);
    if(word.length > 0){
        console.log(`${searchedWord}`);
    } else {
        console.log(`${searchedWord} not found!`)
    }
}

strSubstring('javascript',
'JavaScript is the best programming language'
)

strSubstring('python',
'JavaScript is the best programming language'
)