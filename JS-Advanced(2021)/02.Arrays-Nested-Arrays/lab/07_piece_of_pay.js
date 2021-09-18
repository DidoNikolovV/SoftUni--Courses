function pieceOfPay(piesFlavors, flavor1, flavor2){
    let start = piesFlavors.indexOf(flavor1);
    let end = piesFlavors.indexOf(flavor2) + 1;
    let flavors = piesFlavors.slice(start, end);
    return flavors;
}

pieceOfPay(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)

console.log('-------');

pieceOfPay(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
)