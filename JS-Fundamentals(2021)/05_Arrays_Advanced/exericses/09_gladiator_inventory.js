function gladioatorInventory(commands){
    let inventory = commands.shift();
    for(let command of commands){
        let tokens = command.split(" ");
        let equipment = tokens[1];
        if(tokens[0] === "Buy"){
            if(!equipment.includes()) {
                inventory.push(equipment);
            }
        } else if(tokens[0] === "Trash"){
            if(inventory.includes(equipment)) {
                let idx = inventory.indexOf(equipment);
                inventory.splice(idx, 1);
            }
        } else if(tokens[0] === "Repair"){
            
        } else if(tokens[0] === "Upgrade"){
            
        }
    }

    console.log(inventory);
}

gladioatorInventory(['SWORD Shield Spear',
'Buy Bag', 'Trash Shield']
)