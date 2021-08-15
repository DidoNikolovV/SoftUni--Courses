function employees(myArr){
    let myObj = {};
    for(let i = 0; i < myArr.length; i++){
        let currentName = myArr[i];
        let personalNum = Number(currentName.length);

        myObj.name = currentName;
        myObj.personalNum = personalNum;

        console.log(`Name: ${myObj.name} -- Personal Number: ${myObj.personalNum}`) 

    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )