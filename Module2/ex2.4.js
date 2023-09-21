let currentDate = new Date();
let currentDay = currentDate.getDay();
let dayOfMonth = currentDate.getDate();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

switch(currentDay) {
    case 0:
        currentDay ="Sunday";
        break;
    case 1:
        currentDay ="Monday";
        break;
    case 2:
        currentDay="Tuesday";
        break;
    case 3:
        currentDay="Wednesday";
        break;
    case 4:
        currentDay="Thursday";
        break;
    case 5:
        currentDay="Friday";
        break;
    case 6:
        currentDay="Saturday";
        break;
        
        default:
            currentDay="Day not found";
            break;
}

switch(currentMonth) {
    case 0:
        currentMonth= "January";
        break;
    case 1:
       currentMonth= "February";
        break;
    case 2:
        currentMonth= "March";
        break;
    case 3:
        currentMonth= "April";
        break;
    case 4:
        currentMonth= "May";
        break;
    case 5:
        currentMonth= "June";
        break;
    case 6:
        currentMonth= "July";
        break;
    case 7:
         currentMonth="August";
        break;
    case 8:
         currentMonth="September";
        break;
    case 9:
         currentMonth="October";
        break;
    case 10:
         currentMonth="November";
        break;
    case 11:
         currentMonth="December";
        break;

        default:
             currentMonth="Month not found";
            break;
}

console.log(`Today is ${currentDay} the ${dayOfMonth} of ${currentMonth} ${currentYear}`);