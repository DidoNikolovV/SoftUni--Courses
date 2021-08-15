function solve(input){
    let password = input.shift();
    let newPassword = "";
    while(input[0] != "Done"){
        let tokens = input.shift().split(" ");
        let command = tokens[0];

        if(command === "TakeOdd"){
            for(let i = 1; i < password.length; i+= 2) {
                newPassword += password[i];
            }
            console.log(newPassword);
        } else if(command === "Cut") {
            let index = Number(tokens[1]);
            let length = Number(tokens[2]);

            let subString = newPassword.substring(index, index + length);
            newPassword = newPassword.replace(subString, "");
            console.log(newPassword);
        } else if(command === "Substitute"){
            let subString = tokens[1];
            let substitute = tokens[2];

            if(newPassword.indexOf(subString) != -1){
                newPassword = newPassword.split(subString).join(substitute);
                console.log(newPassword);
            } else {
                console.log("Nothing to replace!");
            }
        }
    }

    console.log(`Your password is: ${newPassword}`);
}

solve((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])
)