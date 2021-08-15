function numbers(input){
    let myArr = input.split(" ").map(Number);
    let avg = 0;
    let count = 0;
    let result = [];
    let sortedResult = [];
    for(let element of myArr){
        avg += element;
        count++;
    }
    avg /= count;

    for(let element of myArr) {
        if(element > avg) {
            if(result.length == 5){
                result.sort(function(a, b) {return a-b});
                result.shift();
                result.unshift(element);   
            } else {
                result.push(element);
            }
        }

        
    }
    if(result.length == 0){
        console.log('No');
    } else {
        sortedResult = result.sort(function(a, b) {return b-a});
        console.log(sortedResult.join(' '));
    }
}

numbers(['10', '20', '30', '40', '50']);
//numbers(['5', '2', '3', '4', '-10', '30', '40', '50', '20', '50', '60', '60', '51'])
//numbers(['-1', '-2', '-3', '-4', '-5', '-6'])
//юnumbers(['1']);
