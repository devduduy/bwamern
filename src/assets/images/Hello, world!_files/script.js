var canvas1 = document.getElementById("myCanvas1");
var context1 = canvas1.getContext("2d");
var context2 = context1;
context1.beginPath();
context1.arc(100, 250, 400, 0, 2 * Math.PI, false);

context1.closePath();
context1.lineWidth = 0;
context1.strokeStyle = "#D0970B";
context1.fillStyle = "#D0970B";
context1.stroke();
context1.fill();
context2.beginPath();
context2.arc(450, 0, 100, 0, Math.PI, false);
context2.closePath();
context2.lineWidth = 0;
context2.strokeStyle = "#fff";
context2.fillStyle = "#fff";
context2.stroke();
context2.fill();

context1.font = "18px Poppins";
context1.fillText("Portfolio keren Infinity Software & ", 100, 340);
context1.fillText("klien-klien luar biasa yang ", 100, 360);
context1.fillText("mempercayai kami.  ", 100, 380);
