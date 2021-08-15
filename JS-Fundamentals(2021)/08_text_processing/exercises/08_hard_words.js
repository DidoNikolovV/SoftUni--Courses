function hardWords(letter){
    let letterWords = letter[0].split(" ");
    for(let i = 0; i < letterWords.length; i++){
        let firstLetter = letterWords[i][0];
        if(firstLetter === "_") {
            for(let i = 0; i < letter[1].length; i++){
                if(letterWords[i].length === letterWords[i].length){
                    letterWords.replace(letterWords[i], letterWords[i]);
                }
            }
        }
    }
  

}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)