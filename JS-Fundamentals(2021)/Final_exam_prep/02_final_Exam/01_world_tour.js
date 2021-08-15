function worldTour(input){
    let stops = input.shift();
    

    while(input[0] != "Travel"){
        let line = input.shift();
        let command = line.split(":")[0];

        if(command === "Add Stop") {
            let index = Number(line.split(":")[1]);
            let string = line.split(":")[2];

            if(stops.length > index) {
                stops = stops.substring(0, index) + string + stops.substring(index);
            }
            console.log(stops);
        } else if(command === "Remove Stop") {
            let startIndex = Number(line.split(":")[1]);
            let endIndex = Number(line.split(":")[2]);

            if(startIndex < stops.length && endIndex < stops.length) {
                stops = stops.substring(0, startIndex) + stops.substring(endIndex +1);

            }
            console.log(stops);
        } else if(command === "Switch") {
            let oldString = line.split(":")[1];
            let newString = line.split(":")[2];

            stops = stops.split(":");
            let oldStringIndex = stops.indexOf(oldString);
            if(stops.includes(oldString)) {
                stops.splice(oldStringIndex, 1, newString);
            }
            stops = stops.join(":");
            console.log(stops); 

        }
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
