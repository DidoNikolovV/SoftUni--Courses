function createAssemblyLine(){
    let myObject = {
        hasClima: function (carObject) {
            carObject.temp = 21;
            carObject.tempSettings = 21;
            carObject.adjustTemp = () => {
                if(carObject.temp < carObject.tempSettings) {
                    carObject.temp += 1;
                } else if (carObject.temp > carObject.tempSettings) {
                    carObject.temp -=1;
                }
            }
        },
        hasAudio: function(carObject) {
            carObject.currentTrack =  {
                name: null,
                arist: null
            };
            carObject.nowPlaying = () => {
                if(carObject.currentTrack.name !== null && carObject.currentTrack.artist !== null){
                    console.log(`Now playing '${carObject.currentTrack.name}' by ${carObject.currentTrack.artist}`);
                }
            }
        },
        hasParktronic: function(carObject) {
            carObject.checkDistance = function(distance) {
                if(distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if(distance >= 0.1 && distance < 0.25){
                    console.log("Beep! Beep!");
                } else if(distance >= 0.25 && distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log("");
                }
            }
        } 
    } 
    return myObject;
}
   

const assemblyLine = createAssemblyLine();
const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

