function matchPhoneNumber(phoneNumbers){
    let pattern = /\+359 2 [0-9]{3} [0-9]{4}\b|\+359-2-[0-9]{3}-[0-9]{4}\b/g;
    let validNumbers = [];
    while((validNumber = pattern.exec(phoneNumbers)) !== null){
        validNumbers.push(validNumber[0]);
    }

    console.log(validNumbers.join(', '));
}

matchPhoneNumber('+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222')