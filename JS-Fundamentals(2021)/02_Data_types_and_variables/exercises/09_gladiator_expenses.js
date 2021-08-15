function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let brokenHelmets = 0;
    let brokenSwords = 0;
    let brokenShields = 0;
    let brokenArmor = 0;
    for(let i = 1; i < lostFights; i++){
        if(i % 2 == 0){
            brokenHelmets++;
        }
        if(i % 3 == 0){
            brokenSwords++;
            
        }
        if(i % 3 == 0 && i % 2 == 0){
            brokenShields++;
           if(brokenShields % 2 == 0){
                brokenArmor++;
           }
        }
    }
 
    let expenses = (brokenHelmets * helmetPrice) + (brokenSwords * swordPrice) + (brokenShields * shieldPrice) + (brokenArmor * armorPrice);
    console.log(`Gladiator expenses: ${((expenses).toFixed(2))} aureus`)
}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    );