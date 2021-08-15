function login(list){
    let index = 0;
    let username = list[index++];
    let password = "";
    let guess = list[index++];
    let attempts = 0;
    for(let i = username.length - 1; i >= 0; i--){
        password += username[i];
    }
    while(guess != password){
        attempts++;
        if(attempts == 4){
            console.log(`User ${username} blocked!`);
            break;
        }
        else{
            console.log("Incorrect password. Try again.");
        }
        guess = list[index++]
    }
    if(guess === password && attempts < 4){
        console.log(`User ${username} logged in.`)
    }

}

login(['sunny','rainy','cloudy','sunny','not sunny']);