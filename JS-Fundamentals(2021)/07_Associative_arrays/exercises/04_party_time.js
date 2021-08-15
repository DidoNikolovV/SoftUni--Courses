function party(input){
   
    let vipNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let vipGuests = [];
    let regularGuests = [];
    let partyIndex = input.indexOf("PARTY");

    for(let i = 0; i < partyIndex; i++){
        let current = input[i];
        if(vipNumbers.includes(current[0])) {
            vipGuests.push(current);
        } else {
            regularGuests.push(current);
        }   
    }

    // Removing guests
    for(let i = partyIndex + 1; i < input.length; i++){
        let currentGuest = input[i];

        if(vipGuests.includes(currentGuest)){
            vipGuests.splice(vipGuests.indexOf(currentGuest), 1);
        } else if(regularGuests.includes(currentGuest)){
            regularGuests.splice(regularGuests.indexOf(currentGuest), 1);
        }
    }

    let totalGuest = regularGuests.length + vipGuests.length;
    console.log(totalGuest);
    console.log(vipGuests.join("\n"));
    console.log(regularGuests.join("\n"));

}

party(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]
)