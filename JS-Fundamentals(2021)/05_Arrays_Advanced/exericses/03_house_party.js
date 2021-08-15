function houseParty(arr){
    let tokens = arr.split();
    let name = tokens[0];
    let guests = [];
    if(tokens[1] == "is going!"){
        if(!guests.includes(name)) {
            guests.push(name);
        }
    } else {
        if(guests.includes(name)) {
            guests.splice(name);
        }
    }

    console.log(guests)
}
