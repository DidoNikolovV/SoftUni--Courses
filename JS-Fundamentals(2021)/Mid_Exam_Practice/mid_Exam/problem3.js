function solve3(input){
    let cards = input.shift().split(":");

    let line = input.shift();

    let newDeck = [];

    while(line != "Ready"){
        let tokens = line.split(" ");

        if(tokens[0] == "Add"){
            let cardName = tokens[1];
            if(cards.includes(cardName) === false){
                console.log("Card not found.");
            } else {
                add(newDeck, cardName);
            }
        } else if(tokens[0] == "Insert"){
            let cardName = tokens[1];
            let index = Number(tokens[2]);
            if((cards.includes(cardName) === false) || (index < 0 || index >= cards.length)){
                console.log("Error!")
            } else {
                insert(newDeck, index, cardName)
            }
        } else if(tokens[0] == "Remove"){
            let cardName = tokens[1];
            if(newDeck.includes(cardName) === false){
                console.log("Card not found.");
            } else {
                remove(newDeck, cardName);
            }
        } else if(tokens[0] == "Swap"){
            let cardName1 = tokens[1];
            let cardName2 = tokens[2];
            let index1 = newDeck.indexOf(cardName1);
            let index2 = newDeck.indexOf(cardName2);
            swap(newDeck, index1, index2);

        } else if(tokens[0] == "Shuffle"){
            shuffle(newDeck);
        }
        line = input.shift();
    }

    console.log(newDeck.join(" "));

    function add(list, cardName){
        list.push(cardName);
    }

    function insert(list, index, cardName){
        list.splice(index, 0, cardName);
    }

    function remove(list, cardName) {
        let index = list.indexOf(cardName);
        list.splice(index, 1);
    }

    function swap(list, index1, index2){
        let temp = list[index1];
        list[index1] = list[index2];
        list[index2] = temp;
    }

    function shuffle(list){
        list.reverse();
    }
}



solve3(["Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
"Add Moonfire",
"Add Pounce",
"Add Bite",
"Add Wrath",
"Insert Claw 0",
"Swap Claw Moonfire",
"Remove Bite",
"Shuffle deck",
"Ready"])


