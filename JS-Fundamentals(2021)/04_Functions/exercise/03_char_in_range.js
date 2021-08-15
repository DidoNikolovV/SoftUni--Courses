function printBetween(char1, char2){

    
    function convertChar1(char1) {
        char1 = char1.charCodeAt(0);
        return char1;
    }
    
    function convertChar2(char2){
        char2 = char2.charCodeAt(0);
        return char2;
    }

    let ch1 = convertChar1(char1);
    let ch2 = convertChar2(char2);
    

    let result = "";

    if(ch1< ch2) {
        for(let i = ch1 + 1;  i <= ch2 - 1; i++) {
            result +=String.fromCharCode(i) + " ";
        }
    }
    else {
        for(let i = ch2 + 1;  i < ch1; i++) {
            result +=String.fromCharCode(i) + " ";
        }
    }
    
    console.log(result);
}





printBetween('a', 'd');
printBetween('#', ':');
printBetween('C', '#');