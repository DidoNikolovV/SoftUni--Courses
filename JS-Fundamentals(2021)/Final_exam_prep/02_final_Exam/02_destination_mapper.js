function destinationMapper(text){
    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;
    let travelPoints = 0;


    let destinations = text.match(pattern);
    if(destinations != null){
        for(let i = 0; i < destinations.length; i++) {
            destinations[i] = destinations[i].slice(1, -1);
            travelPoints += destinations[i].length;
        }

        console.log(`Destinations: ${destinations.join(", ")}`);
        console.log(`Travel Points: ${travelPoints}`);
    } else {
        console.log(`Destinations: `);
        console.log(`Travel Points: 0`);
    }
   
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput")