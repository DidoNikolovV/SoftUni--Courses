function arenaTier(input){
    let gladiatorsObj = {};
    let command = input.shift();
    while(command != "Ave Cesar") {
        if(command.split(" ")[1] === "vs"){
            let firstGladiator = command.=split(" ")[0];
            let secondGladiator = command.split(" ")[2];
            let firstGladiatorTotalSkill = 0;
            let secondGladiatorTotalSkill = 0;

            if(Object.keys(gladiatorsObj).includes(firstGladiator) && Object.keys(gladiatorsObj).includes(secondGladiator)){
                for(let key of Object.keys(gladiatorsObj[firstGladiator])){
                    firstGladiatorTotalSkill += gladiatorsObj[firstGladiator][key];
                }

                for(let key of Object.keys(gladiatorsObj[secondGladiator])){
                    secondGladiatorTotalSkill += gladiatorsObj[secondGladiator][key];

                    if(Object.keys(gladiatorsObj[firstGladiator]).includes(key)) {
                        if(firstGladiatorTotalSkill > secondGladiatorTotalSkill) {
                            delete gladiatorsObj[secondGladiator];
                        } else {
                            delete gladiatorsObj[firstGladiator];
                        }
                    }
                }


            }
        } else {
            let gladiator = command.split(" -> ")[0];
            let technique = command.split(" -> ")[1];
            let skill = Number(command.split(" -> ")[2]);
            let gladiatorTechnique = {};

            if(!Object.keys(gladiatorsObj).includes(gladiator)) {
                gladiatorTechnique[technique] = skill;
                gladiatorsObj[gladiator] = gladiatorTechnique;
            } else {
                if(!Object.values(gladiatorsObj).includes(technique)) {
                gladiatorsObj[gladiator][technique] = skill;
                } else {
                    if(gladiatorsObj[gladiator][technique] < skill) {
                        gladiatorsObj[gladiator][technique] = skill
                    }
                    
                }
                
            } 
        }
          
        command = input.shift();  
    }   

    let sortedGladiators = Object.keys(gladiatorsObj).sort()

    for(let key in gladiatorsObj.keys()) {

    }
}

/*arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ]
    )
*/
arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]
    
    )