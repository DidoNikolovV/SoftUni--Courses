function stringLength(string1, string2, string3){
    let sumOfLengths = string1.length + string2.length + string3.length;
    let averageLength = Math.floor(sumOfLengths / 3);
    console.log(sumOfLengths);
    console.log(averageLength);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');