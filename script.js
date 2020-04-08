var date = new Date();
document.getElementById("date").innerHTML = (
  ("0" + date.getDate()).slice(-2)) + "." + (("0" + (date.getMonth() + 1)).slice(-2)) + "." + (date.getFullYear()
);

var time = new Date();
document.getElementById("time").innerHTML = time.toLocaleTimeString([], {timeStyle: 'short'});
