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
   // document.getElementById("KlokAfbeelding").innerHTML = "<img width=30 height=30 src='" + klokAfbeelding + ".png'/>"
document.getElementById("datum").innerHTML = datum;