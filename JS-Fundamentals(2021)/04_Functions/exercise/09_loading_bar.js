function loadingBar(num) {
    let barArray = [];
    let bar = "";
    for(let i = 0; i < 10; i++){
        barArray.push(".");
    }
    
    
    let loadingPercent = num / 10;
    for(let i = 0; i < loadingPercent; i++){
        barArray[i] = "%";
    }

    for(let i = 0; i < 10; i++) {
        bar += barArray[i];
    }
    if(num === 100) {
        console.log(`100% Complete!`);
        console.log(`[${bar}]`);
    } else {
        console.log(`${num}% [${bar}]`);
        console.log("Still loading...");
    }

}

loadingBar(50);
