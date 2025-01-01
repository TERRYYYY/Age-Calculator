// Variable to store user's input
let userInput = document.getElementById("date");

// Disable user from selecting a future date in the calendar
userInput.max = new Date().toISOString().split("T")[0];

//Variable that stores the results
let result = document.getElementById("result");


//Function for calculating the age
function calculateAge(){
    // When you select a Date, it will be stored in this variable below
    let birthDate = new Date(userInput.value);

    // Storing the date, month and year in separate variables
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1; //Adding 1 because month starts from 0
    let y1 = birthDate.getFullYear();

    // Getting the current date so as to get the difference between the inputted date and now o as to get the user's age
    let today = new Date();

    // Storing the current date, month and year in separate variables
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    //Variable that stores the difference btwn inputted date and today's date
    let d3, m3, y3;


    // Calculating the difference between the inputted date and today's date`
    y3 = y2 - y1;
   
    if(m2 >= m1){
        m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){    
        d3 = d2 - d1;
    }
    else{
        m3--;
        d3 = getDaysInMonths(y1, m1) + d2 - d1;
    
    }

    if(m3 < 0){
        m3 = 11;
        y3--;
    }

    // console.log(y3, m3, d3);
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`
}


//Calculating the no of days there in every month
function getDaysInMonths(year, month){
    return new Date(year, month, 0).getDate();
}
