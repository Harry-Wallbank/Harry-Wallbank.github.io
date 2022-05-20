var countDownDate = new Date("June 19, 2022 00:00:00").getTime();
var num1 = 1000 * 60 * 60 * 24
var num2 = 1000 * 60 * 60

var x = setInterval(function(){

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / num1);
    var hours = Math.floor((distance % num1) / num2);
    var minutes = Math.floor ((distance % num2) / (1000 * 60))
    var seconds = Math.floor ((distance % (1000 * 60)) /1000);

    document.getElementById("demo").innerHTML = days +"d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance <0) {
        clearInterval(x);
        document.getElementById("demo".innerHTML = "Opening soon")
    }
}, 1000);