var bgimg;
var ground;
var PLAY = 1,END = 0;
var gameState = PLAY;

function preload(){
bgimg = loadImage("images/bg.jpg");
}
function setup() {
  createCanvas(displayWidth-50,displayHeight-50);
  bg = createSprite(displayWidth-50,displayHeight-50);
  bg.addImage(bgimg);
  bg.scale = 3;
  
}

function draw() {
  
  if(gameState==PLAY){
   
  }
  else if(gameState==END){

  }
  drawSprites();
  }
  
  
