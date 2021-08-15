function solve(input){
    let text = input.shift();
    let emojisPattern = /(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;
    let threshHoldPattern = /\d/g

   
    let threshHold = 1;
    let coolEmojis = [];
    let allEmojis = [];
   


    let emojis = emojisPattern.exec(text);
    let coolThreshHold = text.match(threshHoldPattern);

    for(let point of coolThreshHold){
        threshHold *= Number(point);
    }


    while(emojis != null){
        allEmojis.push(emojis[0]);
        let coolPoints = 0;
        for(let ch of emojis[2]) {
            coolPoints += ch.charCodeAt(0);
        }

        if(coolPoints >= threshHold){
            coolEmojis.push(emojis[0]);
        }

        emojis = emojisPattern.exec(text);
    }

    console.log(`Cool threshold: ${threshHold}`);
    console.log(`${allEmojis.length} emojis found in the text. The cool ones are:`)
    for(let e of coolEmojis){
        console.log(e) + " ";
    }
}

solve(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])