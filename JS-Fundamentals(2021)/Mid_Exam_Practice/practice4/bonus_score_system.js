function bonusScoringSystem(input){
    let studentsCount = Number(input.shift())
    let lectures = Number(input.shift());
    let bonus = Number(input.shift());
    let totalBonus = 0;
    let maxBonus = 0;
    let maxAttendance = 0;

    for(let i = 0; i< studentsCount; i++){
        let attendance = input.shift().split(', ');
        totalBonus = attendance / lectures * (5 + bonus);
        if(maxBonus < totalBonus){
            maxBonus = totalBonus;
            maxAttendance = attendance;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`)
}

bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]
   )