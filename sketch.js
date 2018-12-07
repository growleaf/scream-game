// All code was code I learned in class
// Concept: a thing that gest flustered when you talk loudly

var mic;
var amp;
var scale = 1.0;
let speech;
var imgA;
var imgB;

function preload() {
  imgA = loadImage("happy.png");
  imgB = loadImage("scared.png");
  bg = loadImage("bg.jpg")
}

function setup() {
  createCanvas(500, 500);
  background(150);
  image(bg,0,0,500,500)
  mic = new p5.AudioIn();
  mic.start();
  amp = new p5.Amplitude;
  amp.setInput(mic);
  }

  function draw(){
    var vol = mic.getLevel();
    console.log(vol);
//boolean to switch code
    var stress = false;
//Threshhold is set relatively low beceause my microphones weren't good at picking up audio: ideally 0.2 worked for better quality microphones
   if (vol > 0.05) {
     stress = true;
   } else {
     stress = false;
   }

   if (stress == true) {
     image(imgB, 100,100,300,300);
   }

   if (stress == false) {
     image(imgA, 100,100,300,300);
   }
 }
