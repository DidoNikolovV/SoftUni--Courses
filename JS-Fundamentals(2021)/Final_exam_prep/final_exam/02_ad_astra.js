function solve(text){

    let pattern = /([#|])[A-Za-z\s]+\1(\d{2,}\/\d{2,}\/\d{2,})\1(\d+)\1/g;
    
    let myObj = {};
    let totalCalories = 0;
    let match = pattern.exec(text);
    while(match != null) {
        let item = match[1];
        let date = match[2];
        let calories = Number(match[3]);

        myObj[item] = {

            date: date,
            calories:calories
        }
        
    }


    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`)

   

    
    
    
}

solve(
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|' 
)

// (#|\|)([A-Za-z\s])\1
// (\d{2,}\/\d{2,}\/\d{2,})
// (#|\|)(\d+)\1