function phoneBook(input){
    let myObj = {};
    for(let person of input){
        let [name, phoneNumber] = person.split(" ");
        
        myObj[name] = phoneNumber;
    }

    for(let key in myObj){
        console.log(`${key} -> ${myObj[key]}`);
    }

}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)