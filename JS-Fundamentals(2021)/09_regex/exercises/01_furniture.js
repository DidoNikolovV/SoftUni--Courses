function furniture(input){
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/;
    let furniture = [];
    let total = 0;
    // parse input untill line Purhcase
     // for each line check regex pattern
    while(input[0] != "Purchase") {
       let line = input.shift();
       // - if match store furnite and add cost to total
       let match = pattern.exec(line);
       if(match != null){
        let {name, price, qty} = match.groups;
        price = Number(price);
        qty = Number(qty);
        total += price * qty;
        furniture.push(name);
       }
    }
    // print result
    console.log("Bought furniture:");
    for(let item of furniture){
        console.log(item);
    }
    console.log(`Total money spend: ${(total).toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3",
">>TV<<300!5",
">Invalid<<!5",
"Purchase"]
);