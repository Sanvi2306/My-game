const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var backImg1,backImg2,boy1Img,girl1Img;

var gameState = 0;

var player1;
var player2;
function preload(){
 backImg1=loadImage("bg.jpg");
backImg2=loadImage("bg 2.PNG");
boy1Img=loadImage("boy/Idle.png");
girl1Img=loadImage("girl/Idle (16).png")
  
}

function setup() {
  if(gameState == 0){
  createCanvas(displayWidth,displayHeight);
  player1 = createSprite(400, height-200, 50, 50);
  player1.addImage("boi",boy1Img);
  player1.scale=0.7
  player2 = createSprite(850, height-200, 50, 50);
  player2.addImage(girl1Img);
  player2.scale=0.7;
  }
 
}

function draw() {
  if(gameState ==0){
  background(backImg1);
  textSize(70);  
  textFont("Brush Script MT");
  fill("white")
  stroke("lightblue")
  strokeWeight(5)
 text("Choose Your Player",390,380);

 if(mousePressedOver(player1)){
   gameState =1;
   playerAnimSelection = 1;
 }

if(mousePressedOver(player2)){
   gameState =1;
   playerAnimSelection = 0;
 }
  }
  else if(gameState == 1){
    createCanvas(displayWidth*6,400);

  }
  drawSprites();
}