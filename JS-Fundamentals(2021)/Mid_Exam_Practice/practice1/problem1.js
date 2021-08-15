function nationalCourt(input){
    let e1 = Number(input[0]);
    let e2 = Number(input[1]);
    let e3 = Number(input[2]);


    let efficiency = e1 + e2 + e3;
    let totalPeople = Number(input[3]);
    let hour = 0;


    while(totalPeople > 0){
        hour++;
        if(hour % 4 != 0){
            totalPeople -= efficiency;
        }
        
    }

    console.log(`Time needed: ${hour}h.`)
}

nationalCourt(['5',
    '6',
    '4',
    '20'
    ])