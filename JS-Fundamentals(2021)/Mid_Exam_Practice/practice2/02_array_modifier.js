function arrayModifier(input){
    let myArr = input.shift().split(' ').map(Number);
    
    let line = input.shift();
    while(line != "end"){
        let command = line.split(' ')[0];
        let idx1 = Number(line.split(' ')[1]);
        let idx2 = Number(line.split(' ')[2]);

        if(command == "swap"){
            swap(myArr, idx1, idx2);
        } else if(command == "multiply"){
            multiply(myArr, idx1, idx2);
        } else if(command == "decrease"){
            decrease(myArr);
        }

        line = input.shift();
    }

    function swap(list, index1, index2){
        let temp = list[index1];
        list[index1] = list[index2];
        list[index2] = temp;
    }
    
    function multiply(list, index1, index2){
        let result = list[index1] * list[index2];
        list[index1] = result;
    }
    
    function decrease(list){
        for(let i = 0; i < list.length; i++){
            list[i] -= 1;
        }
    }
    
    console.log(myArr.join(', '))
}

arrayModifier(['23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])

