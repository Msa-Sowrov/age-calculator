console.log('hello world')

let months = [31,28,31,30,31,30,31,31,30,31,30,31]

function ageCalculate() {
    let today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    let inputDate = new Date(document.querySelector('.date-input').value);
    let birthMonth, birthDate, birthYear;
    let birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear()
    }
    let years = currentYear - birthDetails.year;
    
    if(currentMonth>=birthDetails.month){
        birthMonth = currentMonth- birthDetails.month;
        
    }
    else{
        years--;
        birthMonth = 12+ currentMonth - birthDetails.month;
    }
    if(currentDate >= birthDetails.date){
        birthDate = currentDate - birthDetails.date;
    }
    else{
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;
        if(birthMonth<0){
            birthMonth=11;
            birthYear--;
        }
    }

    document.querySelector('.years').innerHTML = years;
    document.querySelector('.months').innerHTML = birthMonth;
    document.querySelector('.days').innerHTML = birthDate;

}