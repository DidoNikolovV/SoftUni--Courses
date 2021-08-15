function wordTracker(input){
    let words = {};
    let wordsToSearch = input.shift().split(" ");
    for(let word of wordsToSearch){
        if(wordsToSearch.includes(word)){
            words[word] = 0;
        }
    }

    for(let word of input){
        if(Object.keys(words).includes(word)){
            words[word] += 1;
        }
    }

    let sortedWords = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for(let [key, value] of sortedWords){
        console.log(`${key} - ${value}`);
    }
}

wordTracker([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
]
)

