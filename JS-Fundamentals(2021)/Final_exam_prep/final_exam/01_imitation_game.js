function solve(input){
    let message = input.shift();

    while(input[0] != "Decode"){
        let tokens = input.shift().split("|");
        let command = tokens[0];

        if(command === "Move"){
            let numberOfLetters = Number(tokens[1]);
            let left = message.substring(0, numberOfLetters);
            let right = message.substring(numberOfLetters);
            message = right + left;

        } else if (command === "Insert") {
            let index = Number(tokens[1]);
            let value = tokens[2];

            let left = message.substring(0, index);
            let right = message.substring(index);
            message = left + value + right;
            
        } else if(command === "ChangeAll") {
            let subString = tokens[1];
            let replacement = tokens[2];

            message = message.split(subString).join(replacement);
        }
    }


    console.log(`The decrypted message is: ${message}`)
}

solve([ 

    'owyouh', 
  
    'Move|2', 
  
    'Move|3', 
  
    'Insert|3|are', 
  
    'Insert|9|?' ,
  
    'Decode' 
  
  ] );