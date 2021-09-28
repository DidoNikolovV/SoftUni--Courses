function heroicInventory(arr) {
    
    let result = [];
    for(let element of arr) {
        let [name, level, items] = element.split(' / ');
        items = items ? items.split(', '): [];
        level = Number(level);

        result.push({name, level, items});
    }   
    console.log(JSON.stringify(result));  
}


heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);