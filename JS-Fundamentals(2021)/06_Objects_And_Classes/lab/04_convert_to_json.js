function convertToJson(name, lastName, hairColor){
    let myObj  = {};
    myObj.name = name;
    myObj.lastName = lastName;
    myObj.hairColor = hairColor;

    console.log(JSON.stringify(myObj));
}

convertToJson('George',
'Jones',
'Brown'
)