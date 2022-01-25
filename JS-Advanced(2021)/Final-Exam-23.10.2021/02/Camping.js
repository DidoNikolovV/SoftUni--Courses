class SummerCamp {
    constructor(organizer, location){
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        let participant = this.listOfParticipants.find(p => p.name == name)
        if(this.priceForTheCamp[condition] == undefined) {
            throw new Error("Unsuccessful registration at the camp.");
        }

        if(participant) {
            return `The ${name} is already registered at the camp.`
        }

        if(this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`
        }

        let newParticipant = {
            name,
            condition,
            power: 100,
            wins: 0
        }
        this.listOfParticipants.push(newParticipant);
        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name) {
        let participant = this.listOfParticipants.find(p => p.name == name);
        if(!participant) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }

        this.listOfParticipants = this.listOfParticipants.filter(p => p.name != name);
        return `The ${name} removed successfully.`;

    }

    timeToPlay(typeOfGame, participant1, participant2){
        let p1Found = this.listOfParticipants.find(p => participant1 == p.name);
        let p2Found = this.listOfParticipants.find(p => participant2 == p.name);

        if((participant1 && participant2) && (p1Found.condition !== p2Found.condition)) {
          throw new Error("Choose players with equal condition.");
        }

        if(typeOfGame === "WaterBalloonFights") {
            // return this.playGameWithTwo(typeOfGame, participant1, participant2);
            if(!p1Found || !p2Found){
               throw new Error("Invalid entered name//s.")
            }
            if(p1Found.power > p2Found.power){
                p1Found.wins += 1;
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            } else if(p1Found.power < p2Found.power){
                p2Found.wins += 1;
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            }
            return 'There is no winner.'
            
        } else if(typeOfGame == "Battleship") {
            // return this.playGameWithOne(typeOfGame, participant1);
            p1Found.power += 20;
            return  `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
    }

    // playGameWithTwo(name, p1, p2) {
    //     let p1Found = this.listOfParticipants.find(p => p1 == p.name);
    //     let p2Found = this.listOfParticipants.find(p => p2 == p.name);

    //     if(!p1Found || !p2Found) {
    //         throw new Error("Invalid entered name/s.")
    //     }

    //     if(p1Found.condition !== p2Found.condition) {
    //         throw new Error("Choose players with equal condition.");
    //     }

    //     let p1Power = p1Found.power;
    //     let p2Power = p2Found.power;
    //     if(p1Power > p2Power) {
    //         p1Found.wins += 1;
    //         return `The ${p1} is winner in the game ${name}.`
    //     } else if(p1Power < p2Power) {
    //         p2Found.wins += 1;
    //         return `The ${p2} is winner in the game ${name}.`
    //     }

    //     return 'There is no winner.'  
    // }

    // playGameWithOne(name, p1){
    //     let participant = this.listOfParticipants.find(p => p.name == p1);
    //     participant.power += 20;
    //     return `The ${p1} successfully completed the game ${name}.`
    // }

    toString() {
        let result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        // result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        let sortedParticipants = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        for(let p of sortedParticipants) {
            result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`)
        }
        return result.join("\n");
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
