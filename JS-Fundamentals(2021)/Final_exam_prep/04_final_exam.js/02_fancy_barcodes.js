function solve(input){
    let nBarcodes = Number(input.shift());
    
    let pattern = /(@#+)([A-Za-z0-9]){5,}[A-Z](@#+)/g;
    let digitPattern = /\d/g

    let match = pattern.exec(input);

    let matches = [];

    for(let i = 0; i < nBarcodes; i++){

        if(match != null){
            matches.push(match[0]);
        }
        match = pattern.exec(input);
    }

    
    for(let i = 0; i < matches.length; i++){
        let digitMatches = matches.match(digitPattern);
        console.log(digitMatches);

    }
  

   

}

solve((["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])
)