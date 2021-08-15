function inventory(input){
    let journal = input.shift().split(", ");
    let line = input.shift();
    while(line != 'Craft!'){
        let [command, item, newItem] = line.split(" - ");

        if(command == "Collect"){
           collect(journal, item);
        } else if(command == "Drop"){
            drop(journal, item);
        } else if(command == "Combine Items"){
            let oldItem = item.split(":")[0];
            let newItem = item.split(":")[1];
            combineItems(journal, oldItem, newItem);
        } else if(command == "Renew"){
            renew(journal, item);
        }
        line = input.shift();
    }

    console.log(journal.join(", "));

    function drop(list, item){
        if(list.includes(item) == true){
            let index = list.indexOf(item);
            list.splice(index, 1);
        }
    }

    function collect(list, item){
        if(list.includes(item) == false){
            list.push(item);
        }
    }

    function combineItems(list, oldItem, newItem){
        if(list.includes(oldItem) == true){
            let idx = list.indexOf(oldItem);
            list.splice(idx+1, 0, newItem);
        }
    }

    function renew(list, item){
        if(list.includes(item)){
            let idx = list.indexOf(item);
            list.splice(idx, 1);
            list.push(item);
        }
    }
}

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  )
