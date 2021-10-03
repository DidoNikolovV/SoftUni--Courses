function filterEmployees(data, criteria) {
    let parsedData = JSON.parse(data);
    let keys = Object.keys(parsedData);
    let [crit1, crit2] = criteria.split("-");
    let counter = 0;
    if(crit1 == 'all') {
      for(let k of keys) {
        let currentData = parsedData[k];
        console.log(`${counter}. ${currentData.first_name} ${currentData.last_name} - ${currentData.email}`);
        counter++;
        }
    } else {
      for(let k of keys) {
        let currentData = parsedData[k];
        let matchedCriteria = currentData[crit1] == crit2;
        if(matchedCriteria) {
            console.log(`${counter}. ${currentData.first_name} ${currentData.last_name} - ${currentData.email}`);
            counter++;
        }
        
    }
    }
     
   
    
}

filterEmployees(`[{
  "id": "1",
  "first_name": "Ardine",
  "last_name": "Bassam",
  "email": "abassam0@cnn.com",
  "gender": "Female"
}, {
  "id": "2",
  "first_name": "Kizzee",
  "last_name": "Jost",
  "email": "kjost1@forbes.com",
  "gender": "Female"
},  
{
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
}]`, 
'gender-Female'
)




