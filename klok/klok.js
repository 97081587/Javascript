function RealTimeClockDigi() {
    let vandaag = new Date();
    let hh = vandaag.getHours();
    let mm = vandaag.getMinutes();
    let ss = vandaag.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let tijd = hh + ":" + mm + ":" + ss + " ";

    document.getElementById("klokDigi").innerHTML = tijd;
    var t = setTimeout(function(){ RealTimeClockDigi() }, 1000); 
}
    
let datum = new Date().toDateString();

RealTimeClockDigi();
document.getElementById("datum").innerHTML = datum;


setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
 
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);