var PLAY=1;
var END=0;
var gameState=1
var monkey , monkey_running,ground,jump,upjump;
var banana ,bananaImage, obstacle, obstacleImage,apple,appleImage,gameover,gameover1,reset,reset1;
var foodgroup, obstaclegroup
var score
var survivalTime
 
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  upjump=loadImage("12-121919_up-arrow-green-arrow-positive.png");
  appleImage=loadImage("58844-vector-apple-element-free-download-png-hq.png");
  
  gameover1=loadImage("94485755-game-over-text-written-on-red-simple-circle-rubber-vintage-stamp-.jpg");

  reset1=loadImage("66223310-restart-icon-restart-website-button-on-white-background-.jpg");
}


function setup() {
  createCanvas(600,400)
 
  monkey=createSprite(200,340,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;

  ground=createSprite(100,380,1200,20);
  jump=createSprite(50,300,20,20);
  jump.addImage(upjump);
  jump.scale=0.07
  
   obstaclegroup = createGroup();
  gameover=createSprite(300,100,600,400);
  gameover.addImage(gameover1);
  gameover.scale=0.2
 
  reset=createSprite(300,300);
  reset.addImage(reset1);
  reset.scale=0.1
  survivalTime=0
}


function draw() {
  background("white");
 
  if (gameState===PLAY){
    
     stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time :"  +survivalTime,100,50); 
  noFill();
   spwanobstacle();
  food();
   
   monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  monkey.x=200;
    gameover.visible=false;
    reset.visible=false;
     obstaclegroup.visible=true;
    ground.visible=true;
    jump.visible=true
  }
  else if(gameState===END){
     obstaclegroup.visible=false;
    monkey.x=10000;
    gameover.visible=true;
    banana.visible=false;
  survivalTime=0;
    jump.visible=false;
    reset.visible=true;
    ground.visible=false;
  }
  
drawSprites();
  if(mousePressedOver(jump)&& monkey.y >= 335) {
      monkey.velocityY  =-13;
    }
  if (keyDown("space")&& monkey.y >=335){
   monkey.velocityY  =-13;
      }
  
 if (monkey.collide( obstaclegroup)){
   gameState=0;
 }
 
  if(mousePressedOver(reset)){
     gameState=1;
     }
  
}
  
function spwanobstacle(){
  if (frameCount % 100 === 0){
  obstacle=createSprite(500,350,50,20);
  obstacle.addImage( obstaceImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-10;
  obstacle.lifetime=40;
  
     obstaclegroup.add(obstacle);
  }
 
}

function food(){
if (frameCount % 80 ===0){

banana=createSprite(500,Math.round(random(230,300)),10,10);
  banana.addImage(bananaImage);
  banana.scale=0.05;
         banana.velocityX=-4;           
    banana.lifetime=200;
banana.lifetime=100;
  
  
  
  
} 

 
}
