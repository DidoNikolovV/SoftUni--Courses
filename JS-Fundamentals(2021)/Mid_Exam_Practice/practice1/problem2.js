function shoppingList(input){
    let groceries = input.shift().split('!');

    let line = input.shift();

    while(line != "Go Shopping!") {
        let [command, item, newItem] = line.split(' ');

        if(command == "Urgent"){
            urgent(groceries, item);
        } else if(command == "Unnecessary"){
            unnecessary(groceries, item);
        } else if(command == "Correct"){
            correct(groceries, item, newItem);
        } else if(command == "Rearrange"){
            rearrange(groceries, item);
        }

        line = input.shift();
    }

    console.log(groceries.join(', '));


    function urgent(list, item){
        if(list.includes(item) == false){
            list.unshift(item);
        }
    }
    
    function unnecessary(list, item){
        if(list.includes(item) == true){
            let index = list.indexOf(item);
            list.splice(index, 1);
        }
    }
    
    function correct(list, oldItem, newItem){
        if(list.includes(oldItem) == true){
            let index = list.indexOf(oldItem);
            list[index] = newItem;
        }
    }
    
    function rearrange(list, item){
        if(list.includes(item) == true){
            let index = list.indexOf(item);
            list.splice(index, 1);
            list.push(item);
        }
    }
}

shoppingList(['Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
    ])
