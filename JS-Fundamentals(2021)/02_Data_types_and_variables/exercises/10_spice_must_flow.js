function spiceMustFlow(startingYeld){
    let days = 0;
    let spiceExtracted = 0;
    let consumption = 0
    while(startingYeld >= 100){
        days++;
        spiceExtracted = 26;
        consumption += startingYeld - spiceExtracted;
        startingYeld -= 10;
      
    }
    consumption -= 26;

    console.log(days);
    console.log(consumption)
}



spiceMustFlow(111);