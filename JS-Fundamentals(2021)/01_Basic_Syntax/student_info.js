function student_info(name, age, grade){
    let roundedGrade = grade.toFixed(2);
    console.log(`Name: ${name}, Age: ${age}, Grade: ${roundedGrade}`);
}

student_info('John', 15, 5.54);