function solve(input) {
    let pattern = /(\|)(?<name>[A-Z]{4,})\1:#(?<title>[A-Za-z]+\s[A-Za-z]+)#/g
    let nInputs = Number(input.shift());

    /*let nameMatch = /(\|)(?<name>[A-Z]{4,})\1/g;
    let titleMatch = /#(?<title>[A-Za-z]+\s[A-Za-z]+)#/g;*/

    

    for(let i = 0; i < nInputs; i++) {
        let text = input.shift();
        let match = pattern.exec(text);

        if( match == null) {
            console.log("Access denied!");
        } else {    
            let nameMatch = match.groups['name'];
            let titleMatch = match.groups['title'];

            console.log(`${nameMatch}, The ${titleMatch}
>> Strength: ${nameMatch.length}
>> Armor: ${titleMatch.length}`)
        }

    }

}  


solve((['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#'])
)

/*solve((['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#'])
)*/