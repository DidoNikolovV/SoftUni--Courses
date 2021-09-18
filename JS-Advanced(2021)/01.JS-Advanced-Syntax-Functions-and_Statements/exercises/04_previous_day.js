function previousDay(year, month, day){
    if(day - 1 == 0){
        month-=1;
        day = 30;
        console.log(`${year}-${month}-${day}`)
    } else {
        console.log(`${year}-${month}-${day-1}`)
    }
   
}

previousDay(2016, 10, 1);