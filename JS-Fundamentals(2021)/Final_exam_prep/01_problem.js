function solve(input){
    let message = input.shift();

    while(input[0] != "Finish") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];

        if(command === "Replace") {
            let currentChar = tokens[1];
            let newChar = tokens[2];

            message = message.split(currentChar).join(newChar);
            console.log(message);

        } else if(command === "Cut") {
            let startIdx = Number(tokens[1]);
            let endIdx = Number(tokens[2]);

            if((startIdx >= 0 && startIdx < message.length) && (endIdx >= 0 && endIdx <message.length)) {
                let subStr = message.substring(startIdx, endIdx + 1);
                message = message.replace(subStr, "");
                console.log(message);
            } else {
                console.log("Invalid indices!");
            }  
        } else if(command === "Make"){
            let upperLower = tokens[1];
            let oldChars = message.substring(0,);
            let newChars;
            if(upperLower === "Upper") {
                newChars = oldChars.toUpperCase();
            } else if(upperLower === "Lower") {
                newChars = oldChars.toLowerCase();
            }
            message = message.replace(oldChars, newChars);
            console.log(message);
        } else if(command === "Check") {
            let givenString = tokens[1];
            if(message.includes(givenString)) {
                console.log(`Message contains ${givenString}`);
            } else {
                console.log(`Message doesn't contain ${givenString}`);
            }
        } else if(command === "Sum") {
            let startIdx = Number(tokens[1]);
            let endIdx = Number(tokens[2]);
            let AsciSum = 0;

            if((startIdx >= 0 && startIdx < message.length) && (endIdx >= 0 && endIdx <message.length)) {
                let subStr = message.substring(startIdx, endIdx +1);

                for(let ch of subStr) {
                    AsciSum += ch.charCodeAt(0);
                }

                console.log(AsciSum);
            } else {
                console.log("Invalid indices!");
            }  
        }
    }
}

/*solve((["ILikeSoftUni",
"Replace I We",
"Make Upper",
"Check SoftUni",
"Sum 1 4",
"Cut 1 4",
"Finish"])
)*/

solve((["HappyNameDay",
"Replace p r",
"Make Lower",
"Cut 2 23",
"Sum -2 2",
"Finish"])
)