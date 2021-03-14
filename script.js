function clock(){
    var currentDate = new Date();

    var date = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var second = currentDate.getSeconds();
    
       
    if (hour< 12) {
    greeting = "Good morning";
    document.body.style.backgroundColor = "#fee197";
        } else if (hour< 18) {
        greeting = "Good afternoon";
        document.body.style.backgroundColor = "#5ed2ff";
         } else {
        greeting = "Good evening";
        document.body.style.backgroundColor = "#030116";
        }
    document.getElementById("greeting").innerHTML = greeting;

    if(date < 10){
        date = "0" + date;
    }

    if(month < 10){
        month = "0" + month;
    }

    if(hour < 10){
        hour = "0" + hour;
    }

    if(minute < 10){
        minute = "0" + minute;
    }

    if(second < 10){
        second = "0" + second;
    }

    document.getElementById('date').innerHTML = date;
    document.getElementById('month').innerHTML ="-" + month;
    document.getElementById('year').innerHTML ="-" +year + "|";
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML =":" + minute;
    document.getElementById('second').innerHTML =":" + second;
}

setInterval(clock, 100);

