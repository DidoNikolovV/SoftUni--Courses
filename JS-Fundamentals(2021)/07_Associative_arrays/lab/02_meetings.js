function meetings(input){
    let myMeetings = {};
    for(let meeting of input){
        let [day, person] = meeting.split(" ");
        if(myMeetings.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        } else {
            myMeetings[day] = person;
            console.log(`Scheduled for ${day}`);
        }
    }

    for(let key in myMeetings){
        console.log(`${key} -> ${myMeetings[key]}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])
