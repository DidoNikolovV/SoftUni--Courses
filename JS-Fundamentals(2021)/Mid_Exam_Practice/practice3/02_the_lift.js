function lift(input){
    let peopleWaiting = Number(input.shift());
    let liftState = input.shift().split(" ").map(Number);

    for(let i = 0; i < liftState.length; i++){
        let index = liftState.indexOf(liftState[i]);
     
        if(liftState[index] != 4) {
            let available = 4 - liftState[index];
            if(available > peopleWaiting) {
                available = peopleWaiting;
            }
            peopleWaiting -= available;
            liftState[index] += available;
        } else {
            continue;
        }
    }

    if(peopleWaiting <= 0){
        console.log(`The lift has empty spots!`);
        console.log(`${liftState.join(" ")}`);
    } else if(peopleWaiting > 0) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        console.log(`${liftState.join(" ")}`);
    } else {
        console.log(`${liftState.join(" ")}`);
    }
}

lift([
    "15",
    "0 0 0 0 0"
])

lift([
    "20",
    "0 2 0"
])