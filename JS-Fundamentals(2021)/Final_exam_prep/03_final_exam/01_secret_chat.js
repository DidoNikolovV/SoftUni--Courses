function solve(input){
    let message = input.shift();

    while(input[0] != "Reveal"){
        let tokens = input.shift().split(":|:");
        let command = tokens[0];

        if(command === "InsertSpace"){
            let index = Number(tokens[1]);

            let left = message.substring(0, index);
            let right = message.substring(index);
            message = left + " " + right;
            console.log(message);
        } else if(command === "Reverse") {
            let subString = tokens[1];

            if(message.indexOf(subString) != -1){
                message = message.replace(subString, reverseStr(subString));
                console.log(message);
            } else {
                console.log("error");
            }

          
        } else if(command === "ChangeAll") {
            let subString = tokens[1];
            let replacement = tokens[2];

            message = message.split(subString).join(replacement);

            console.log(message);
        }
    }

    console.log(`You have a new text message: ${message}`)

    function reverseStr(text) {
        return text.split("").reverse().join("")
    }
}

solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  )

