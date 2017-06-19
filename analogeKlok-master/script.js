const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const myTime = document.getElementById('myTime');
var time = new Date();

const face = new Image();
face.src = "images/face.png";

const secondsPointer = new Image();
secondsPointer.src = "images/seconds.png";

const minutesPointer = new Image();
minutesPointer.src = "images/minutes.png"

const hourPointer = new Image();
hourPointer.src = "images/hours.png"

// const face = new Image();
// face.scr = "images/face.png"





//console.log(face);
face.addEventListener('load',()=>{
setInterval(draw, 10);
})



function draw() {
  var time = new Date();
  context.clearRect(0,0,500,500);
  context.drawImage(face,0,0);

  context.save();
  context.translate(250,250);
  context.rotate((time.getSeconds())/60*2*Math.PI)
  context.drawImage(secondsPointer,-26,-224);
  context.restore();

  context.save();
  context.translate(250,250);
  context.rotate((time.getMinutes())/60*2*Math.PI)
  context.drawImage(minutesPointer,-30,-224);
  context.restore();

  context.save();
  context.translate(250,250);
  context.rotate(time.getHours()/60*2*Math.PI)
  context.drawImage(hourPointer,-39,-190);
  context.restore();

  myTime.innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  //console.log("Hia!");
}
