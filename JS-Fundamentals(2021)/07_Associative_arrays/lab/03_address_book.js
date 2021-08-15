function addressBook(input){
    let addressObj = {};
  
    for(let person of input){
        let[name, address] = person.split(":");

        addressObj[name] = address;
    }
    
    let names = Object.keys(addressObj);
    let sortedNames = names.sort();
    for(let name of sortedNames){
        console.log(`${name} -> ${addressObj[name]}`);
    }
   
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)