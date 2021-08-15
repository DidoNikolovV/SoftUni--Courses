function isValid(password){
    let length = password.length;
    function isLongEnough(length) {
        if(length >= 6 && length <= 10){
            return true;
        }
        return false;
    }

    
    for(let i = 0; i < password.length; i ++){
        let isLetter = false
        let currentChar = password[i];
        let isNum = false;
        let charToASCII = currentChar.charCodeAt(0);
        if((charToASCII >= 65 && charToASCII <= 90) || (charToASCII >=97 && charToASCII <= 122)) {
            isLetter = true;
        }
        if(!(currentChar.isNaN())) {
            isNum = true;
        }
    }
    

    function containsTwoDigits(password){
        let count = 0;
        for(let i = 0; i < password.length; i++){
            if(password[i].isDigit()) {
                count++;
            }
        }
        if(count == 2) {
            return true;
        }
        else {
            return false;
        }
    }

    if(isLongEnough && isLetter && isNum && containsTwoDigits) {
        console.log("Password is valid");
    }
}

isValid('MyPassword123');
