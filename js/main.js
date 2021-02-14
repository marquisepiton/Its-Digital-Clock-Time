// Setting/Init. the variables. 
// "militaryTime" variable will check if the hour time is in military. false by default.
let militaryTime = false;

// connecting ID and Classes from the html
// Important !!!!!
let clock = document.getElementById('clock');
let calendar = document.getElementById('calendar');

// This are for the 12-hour & 24-hour buttons.
const convertToTwelve = document.querySelector('.twelveButton');
const convertToTwentyFour = document.querySelector('.twenty-fourButton');

//See the current time in unreadable format (Not needed).
console.log(Date.now());
/*
Definition:
    - Prototype: Are the mechanism by which JavaScript objects inherit features from one another.
        Link: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes


Thoughts:
    - Prototype: Is a object-oriented method?

    - I think there is  a shorter way to do this

    - probably can use this: let [month, date, year] = new Date().toLocaleDateString("en-US").split("/")
                             let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /)
*/

// FUNCTIONS: 

// Listen in on the button clicks
convertToTwelve.addEventListener('click', convertHourDefault);
convertToTwentyFour.addEventListener('click', convertHourToMilitary);

//These functions will toggle the Military time on/off. 
function convertHourToMilitary() {

    if (militaryTime === false) {
        militaryTime = true;

    }
}
function convertHourDefault() {
    if (militaryTime === true) {
        militaryTime = false;
    }

}

/*
"SetInterval" is going to allow the time to keep updating the time/date every second or whatever time you specify
By repeating the "displayClock/displayDate" function.

*/
//1 Seconds: 1000 Milliseconds
setInterval(displayClock, 1000);
//Fun fact: There are 86,400,000 milliseconds in a day. 
setInterval(displayDate, 86400000);

/*
This function will allow the user to see the time.
When the user opens the page it should automatically run 
 This function needs to keep updating the time
*/

// Don't need to use the set method because the 'new Date()' already sets the date for you. 


function displayClock() {
    /*

    Using the Date() object
    using the instance methods for:
        Time: 
            - Hours
            - Minutes
            - Seconds
        Date:  
            - Month
            - Day
            - Year (Full Year)

    */

    let currentTime = new Date();


    // Time Getter. IMPORTANT!!!

    let hoursin24 = currentTime.getHours();

    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let amOrPm = '';

    console.log(hoursin24);


    //This will check if Morning or Afternoon.
    if (hoursin24 >= 12) {
        amOrPm = 'PM';
    }
    else{
        amOrPm = 'AM';
    }




    //This if statement will convert the 24 hours format into 12 hours format
    if (hoursin24 > 12 & militaryTime === false) {
        console.log(hoursin24);
        hoursin24 = (24 - hoursin24) - 12;
    }

    hoursin12 = Math.abs(hoursin24);


   

    //These lines of code is to the '0' for the single digit numbers in the clock.
    if (hoursin12 < 10) {
        hoursin12 = '0' + hoursin12;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }



    // This format will display on the page for the user.
    // Clock format: Hours: Minutes: Seconds
    let timeNow = hoursin12 + ':' + minutes + ':' + seconds + amOrPm;
    // This will change the  "Div id=clock" inner information. 
    clock.innerHTML = timeNow;
    // Troubleshooting purposes.
    console.log("\x1b[36m", timeNow);
}

function displayDate() {

    //Create a new Date object. IMPORTANT!!!!!
    let date = new Date();
    // Date Getters. IMPORTANT!!!
    // Date format: Month: Day: Year
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();

    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }




    //This is to setup up the "Date" format for the user. 
    let dateNow = month + '/' + day + '/' + year;
    calendar.innerHTML = dateNow;
    //Troubleshooting
    console.log("\x1b[33m%s\x1b[0m", dateNow);

}




//Call these functions so it can load faster;
displayDate();
displayClock();










