function solve(input){
    let rawKey = input.shift();

    while(input[0] != "Generate"){
        let tokens = input.shift().split(">>>");
        let command = tokens[0];

        if(command === "Contains"){
            let subString = tokens[1];

            if(rawKey.indexOf(subString) != -1) {
                console.log(`${rawKey} contains ${subString}.`);
            } else {
                console.log("Substring not found!");
            }
        }
        else if(command === "Flip"){
            let upperLower = tokens[1];
            let startIdx = Number(tokens[2]);
            let endIdx = Number(tokens[3]);

            let oldSubString = rawKey.slice(startIdx, endIdx);
            let newSubString;


            if(upperLower === "Upper") {
                newSubString = oldSubString.toUpperCase();
            } else if(upperLower === "Lower") {
                newSubString = oldSubString.toLowerCase();
            }
           
            rawKey = rawKey.replace(oldSubString, newSubString);
            console.log(rawKey);
        }
        else if(command === "Slice") {
            let startIdx = Number(tokens[1]);
            let endIdx = Number(tokens[2]);

            let subStr = rawKey.substring(startIdx, endIdx);
            rawKey = rawKey.replace(subStr, "");

            console.log(rawKey);
        }
    }

    console.log(`Your activation key is: ${rawKey}`);
}

solve((["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])
)

