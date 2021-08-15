function printGrade(grade){
    let description;
    if(grade < 3) {
        description = "Fail";
        grade = 2;
    } else if(grade >= 3 && grade < 3.50) {
        description = "Poor";
    } else if(grade < 4.50) {
        description = "Good";
    } else if(grade < 5.50) {
        description = "Very good";
    } else {
        description = "Excellent";
    }

    if(description == "Fail") {
        console.log(`${description} (${grade})`)   
    } else{
        console.log(`${description} (${grade.toFixed(2)})`)
    }
    
}

printGrade(2);
printGrade(3.45);
printGrade(4.50);
printGrade(5.75);