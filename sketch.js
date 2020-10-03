var PLAY=1;
var END=0;
var gameState=PLAY;
var END;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime;
var overImage;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  overImage=loadAnimation("sprite_7.png");
 
}



function setup() {
  monkey=createSprite(80,250,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1
  monkey.setCollider("rectangle",0,0,50,monkey.height);
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  bananaGroup=createGroup();
  obstaclesGroup=createGroup();
  
  survivalTime=0;
  
  
  
  
  

  
}


function draw() {
  background("green");
  
stroke("black");
  textSize(20);
  fill("black")
   text("Survival Time: "+survivalTime,100,50)
  
  
  if(gameState===PLAY){
  ground.x=ground.width/2;
  
  spawnBanana();
  spawnObstacles();
  
  
  
  if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -12;}
  
  monkey.velocityY = monkey.velocityY + 0.5
  
  
  
  
  survivalTime= survivalTime + Math.round(getFrameRate()/60);
 

  
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();}
  
  if(obstaclesGroup.isTouching(monkey)){
    gameState=END;}}

   else if(gameState===END) {
    
    text ("Game Over",150,200);
obstaclesGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    ground.velocityX=0;
    obstaclesGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
    monkey.addAnimation("monkey",overImage);
   monkey.velocityY=0;}
  
  monkey.collide(ground);

 drawSprites(); 
}
function spawnBanana(){
    if (frameCount % 120 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime=200;
      
    bananaGroup.add(banana);}
}
      
function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,323,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.scale=0.13
   obstacle.lifetime=200;
   obstacle.velocityX = -3;
   obstaclesGroup.add(obstacle);
   }}
  
  




