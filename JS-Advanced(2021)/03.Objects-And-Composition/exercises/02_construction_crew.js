function constructionCrew(workerObj){
    if(workerObj.dizziness == true) {
        let waterRequired = 0.1 * workerObj.weight * workerObj.experience;
        workerObj.levelOfHydrated += waterRequired;
        workerObj.dizziness = false;
    }

    return workerObj;

}

console.log(constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ));


console.log(constructionCrew({ weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true }

  ));

console.log(constructionCrew({ weight: 95,
  experience: 3,
  levelOfHydrated: 0,
  dizziness: false }


  ));