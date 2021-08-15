function companyUsers(input){
    let companyObj = {};
    for(let user of input){
        let [company, id] = user.split(" -> ");
        if(!companyObj.hasOwnProperty(company)) {
            companyObj[company] = id;
        } else {
            if(!companyObj[company].includes(id)) {
                companyObj[company] = companyObj[company].concat(", " + id);
            }
        }
    }

    let sortedCompanyUsers = Object.entries(companyObj).sort((a, b) => a[0].localeCompare(b[0]));
    
    for(let [company, ids] of sortedCompanyUsers){
        console.log(company);
        ids = ids.split(", ");
        for(let id of ids){
            console.log(`-- ${id}`);
        }
      
        
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    
    
)