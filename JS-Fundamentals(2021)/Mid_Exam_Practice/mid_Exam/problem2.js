function solve2(input){
    let weaponName = input.shift().split("|");

    let line = input.shift();
    let evenArr = [];
    let oddArr = [];
    while(line != "Done"){
        let tokens = line.split(" ");
        if(tokens[0] == "Add"){
            let particle = tokens[1];
            let index = Number(tokens[2]);
            if(index >= 0 && index < weaponName.length) {
                weaponName.splice(index, 0, particle);
            }
           
        }
        else if(tokens[0] == "Remove"){  
            let index = Number(tokens[1]);
            if(index >= 0 && index < weaponName.length) {
                weaponName.splice(index, 1);
            }
        } else if(tokens[1] == "Even"){
            for(let i = 0; i< weaponName.length; i+=2){
                evenArr.push(weaponName[i]);
            }
            console.log(evenArr.join(" "));
        } else if(tokens[1] == "Odd") {
            for(let i = 1; i< weaponName.length; i+=2){
                oddArr.push(weaponName[i]);
            }
            console.log(oddArr.join(" ")); 
        }
        line = input.shift("");
    }

    console.log(`You crafted ${weaponName.join("")}!`);
}



solve2((["pa|Do|ha|mm|er",
"Remove 0",
"Add om 1",
"Check Even",
"Done"])
)

solve2((["As|hb|ri|ng|er",
"Remove 10",
"Add lo 5",
"Check Odd",
"Done"])
)

solve2((["Ta|es|to|la|ch",
"Add pa 8",
"Add ha 2",
"Remove 3",
"Done"])
)