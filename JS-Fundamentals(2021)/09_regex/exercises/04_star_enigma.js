function solveEnigme(input){
    let nMsgs = input.shift();
    let pattern = /[starSTAR]/g
    for(let i = 0; i < nMsgs; i++){
        let msg = input.shift();
        let match = msg.match(pattern)
        let decKeys = match.length;

        for(let letter of match){
            letter = letter.charCodeAt(0) - decKeys;
        }  
    }
}

solveEnigme(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);