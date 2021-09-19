function addRemove(commands) {
    let myArr = [];
    for(let i = 0; i < commands.length; i++){
        let currentCommand = commands[i];
        if(currentCommand == 'add') {
            myArr.push(i + 1);
        } else if(currentCommand == 'remove'){
            myArr.pop();
        }
    }

    if(myArr.length == 0) {
        console.log('Empty');
    } else {
        console.log(myArr.join('\n'));
    } 
}

addRemove(['add', 
'add', 
'remove', 
'add', 
'add']
);

addRemove(['remove', 
'remove', 
'remove']
)