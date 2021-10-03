function listProcessor(input){

    let myList = [];


    for(let i of input) {
        let [command, word] = i.split(" ");
        if(command == 'add') {
            add(word);
        } else if(command ==  'remove') {
            remove(word);
        } else {
            print();
        }
    }


    function add(str){
        myList.push(str);
        return myList;
    }


    function remove(str) {
        myList = myList.filter(w => w != str);
        return myList;
    }
    
    function print() {
        console.log(myList.join(","));
    }
 
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])