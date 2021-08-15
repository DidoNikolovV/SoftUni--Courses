function reception(input){
    let e1 = Number(input.shift());
    let e2 = Number(input.shift());
    let e3 = Number(input.shift());

    let studentsCount = Number(input.shift());
    let hour = 0;
    let efficiency = e1 + e2 + e3;

    while(studentsCount > 0){
        hour++;
        if(hour % 4 != 0){
            studentsCount -= efficiency;
        }
    }

    console.log(`Time needed: ${hour}h.`);
    
}

reception(['1',
    '2',
    '3',
    '45'
    ])