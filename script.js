var date = new Date();
document.getElementById("date").innerHTML = date.toLocaleDateString();

var time = new Date();
document.getElementById("time").innerHTML = time.toLocaleTimeString([], {timeStyle: 'short'});
