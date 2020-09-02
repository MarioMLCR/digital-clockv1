function reloj (){
    let time = new Date();
    let minutes = time.getMinutes()
    let seconds = time.getSeconds();
    let hours = time.getHours();
    let date = time.getDate();
    let day = time.getDay();
    let month = time.getMonth();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // CAMBIAMOS EL FORMATO A 12 HORAS CON OPERADORES TERNARIOS
    hours = (hours == 0) ? 12 : hours;
    hours = (hours > 12) ? hours - 12 : hours;
    let ampm = hours <= 12 ? 'pm' : 'am';

    // DECLARAMOS EL AM / PM CON OPERADORES TERNARIOS

    // AM / PM 
    document.getElementById('ampm').innerHTML = ampm

    // TIME
    document.getElementById('hours').innerHTML = hours;
    // -------------------------------------------------------
    if (minutes < 10) {
        document.getElementById('minutes').innerHTML = `0${minutes}`;
    }else{
        document.getElementById('minutes').innerHTML = minutes;
    }
    // -------------------------------------------------------
    document.getElementById('seconds').innerHTML = seconds;
 
    // DATES
    document.getElementById('day').innerHTML = `${days[day]},`
    document.getElementById('month').innerHTML = months[month];
    document.getElementById('date').innerHTML = date;
    // MONTH

    
}
setInterval(reloj, 1000);