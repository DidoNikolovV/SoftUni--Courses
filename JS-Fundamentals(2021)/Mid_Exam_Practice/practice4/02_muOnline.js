function muOnline(input){
    let dungeonsRooms = input.split('|');
    let health = 100;
    let bitcoins = 0;
    let room = 0;
    let survied = true;
    for(let r of dungeonsRooms){
        let command = r.split(" ")[0];
        let number = Number(r.split(" ")[1]);
        room++;
        if(command == "potion"){
            if(health + number > 100){
                let diff = 100 - health;
                health = 100;
                console.log(`You healed for ${diff} hp.`);
                console.log(`Current health: ${health} hp.`)
            } else {
                health += number;
                console.log(`You healed for ${number} hp.`);
                console.log(`Current health: ${health} hp.`)
            }
        } else if(command == "chest"){
            bitcoins += number;
            console.log(`You found ${number} bitcoins.`)
        } else {
            if(health - number > 0){
                console.log(`You slayed ${command}.`)
                health -=number;
            } else{
                console.log(`You died! Killed by ${command}.`)
                console.log(`Best room: ${room}`);
                survied = false;
                break;
            }
        }  
    }

    if(survied){
        console.log(`You've made it!`);
        console.log (`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');