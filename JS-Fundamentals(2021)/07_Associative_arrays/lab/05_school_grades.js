function schoolGrades(input){
    let students = new Map();
    for(let student of input) {
        let tokens = student.split(" ");
        let studentName = tokens[0];
        let grades = tokens.splice(1, tokens.length).map(Number);

        if(students.has(studentName)){
            for(let grade of grades){
                students.get(studentName).push(grade);
            }
        } else {
            students.set(studentName, grades);
        }
    }

    let sorted = Array.from(students).sort(compareAverage);
    
    function compareAverage(a, b){
        avgA = 0;
        a[1].forEach((x) => avgA += x);
        avgA /= a[1].length;

        let avgB = 0;
        b[1].forEach((x) => avgB += x);
        avgB /= b[1].length;

        return avgA - avgB;
    }

    for(let i in sorted){
        let currentPair = sorted[i];
        let studName = currentPair[0];
        let studGrades = currentPair[1];
        console.log(`${studName}: ${studGrades.join(", ")}`)
    } 
}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
);