// Global variables
const today = new Date();
const actualDay = today.getDate();
const actualMonth = today.getMonth() + 1;
const actualYear = today.getFullYear();

const dayDIV = document.getElementById('ac-daywrapper');
const monthDIV = document.getElementById('ac-monthwrapper');
const yearDIV = document.getElementById('ac-yearwrapper'); 

document.getElementById('activator').addEventListener('click', () => {
    defaultStyles();
    const day = +document.getElementById('user-day').value
    const month = +document.getElementById('user-month').value
    const year = +document.getElementById('user-year').value
    verifier = getInvalid(day, month, year);
    // verifier because I don't want to execute the age calculator if there's some problems with the inputs
    if (verifier == true) {
        ageCalculator(day, month, year);
    }
})

// Function that gets an invalid input
const getInvalid = (day, month, year) => {
    let verifier = true;
    const lastDayOfMonth = new Date(year, month, 0).getDate()
   if (day <= 0 || day > lastDayOfMonth) {
        verifier = false;
        dayDIV.querySelector('span').style.color = 'hsl(0, 100%, 67%)';
        dayDIV.querySelector('input').style.border = '1px solid hsl(0, 100%, 67%)'
        if (day == 0) {
            dayDIV.querySelector('#day-no-field').style.display = "block";
        } else {
            dayDIV.querySelector('#day-error').style.display = "block";
        }
        // I tried using a ternary operator but it didn't work I don't know why
    }
    if (month > 12 || month <= 0) {
        verifier = false;
        monthDIV.querySelector('span').style.color = 'hsl(0, 100%, 67%)';
        monthDIV.querySelector('input').style.border = '1px solid hsl(0, 100%, 67%)';
        if (month == 0) {
            monthDIV.querySelector('#month-no-field').style.display = "block";
        } else {
            monthDIV.querySelector('#month-error').style.display = "block";
        }
    }
    if (year == 0 || year > actualYear) {
        verifier = false;
        yearDIV.querySelector('span').style.color = 'hsl(0, 100%, 67%)';
        yearDIV.querySelector('input').style.border = '1px solid hsl(0, 100%, 67%)';
        if (year == 0) {
            yearDIV.querySelector('#year-no-field').style.display = "block";
        } else {
            yearDIV.querySelector('#year-error').style.display = "block";
        }
    }
    return verifier;
}

const ageCalculator = (day, month, year) => {
    const lastDayOfMonth = new Date(year, month, 0).getDate()
    // Year calc
    document.getElementById('year').textContent = actualYear - year
    // Month calc
    if (month <= actualMonth)  {
        document.getElementById('month').textContent = actualMonth - month
    } else {
        document.getElementById('month').textContent = actualMonth + 12 - month
    }
    // Day calc
    if (day <= actualDay) {
        document.getElementById('day').textContent = actualDay - day
    } else {
        document.getElementById('day').textContent = lastDayOfMonth - day + actualDay
    }
}

// The default styles the get back to the normal state after preesing the buttom. If there's a better way to do it let me now
const defaultStyles = () => {
    dayDIV.querySelector('span').style.color = 'hsl(0, 0%, 86%)';
    dayDIV.querySelector('input').style.border = '1px solid hsl(0, 0%, 86%)'
    dayDIV.querySelector('#day-no-field').style.display = "none"
    dayDIV.querySelector('#day-error').style.display = "none"
    monthDIV.querySelector('span').style.color = 'hsl(0, 0%, 86%)';
    monthDIV.querySelector('input').style.border = '1px solid hsl(0, 0%, 86%)'
    monthDIV.querySelector('#month-no-field').style.display = "none"
    monthDIV.querySelector('#month-error').style.display = "none"
    yearDIV.querySelector('span').style.color = 'hsl(0, 0%, 86%)';
    yearDIV.querySelector('input').style.border = '1px solid hsl(0, 0%, 86%)'
    yearDIV.querySelector('#year-no-field').style.display = "none"
    yearDIV.querySelector('#year-error').style.display = "none"
}