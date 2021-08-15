function vacation(group, groupType, day){
    let totalPrice = 0;

    if(groupType == "Business" && group >= 100){
        group -= 10;
    }

    if(groupType == "Students" && day == "Friday"){
        totalPrice = 8.45 * group;
    }
    else if(groupType == "Business" && day == "Friday"){
        totalPrice = 10.90 * group;
    }
    else if(groupType == "Regular" && day == "Friday"){
        totalPrice = 15 * group;
    }
    else if(groupType == "Students" && day == "Saturday"){
        totalPrice = 9.80 * group;
    }
    else if(groupType == "Business" && day == "Saturday"){
        totalPrice = 15.60 * group;
    }
    else if(groupType == "Regular" && day == "Saturday"){
        totalPrice = 20 * group;
    }
    else if(groupType == "Students" && day == "Sunday"){
        totalPrice = 10.46 * group;
    }
    else if(groupType == "Business" && day == "Sunday"){
        totalPrice = 16 * group;
    }
    else if(groupType == "Regular" && day == "Sunday"){
        totalPrice = 22.50 * group;
    }

    if(groupType == "Students" && group >= 30){
        totalPrice *= 0.85;
    } 
    else if(groupType == "Regular" && group >= 10 && group <= 20){
        totalPrice *= 0.95;
    } 
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(40,
    "Regular",
    "Saturday"
)