var fixedRect,movingRect;
var box1,box2,box3,box4;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100, 100,100,50);
  movingRect = createSprite(175, 100,50,100);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  box1 = createSprite(400,100,50,50);
  box2 = createSprite(400,300,50,50);
  box1.shapeColor = "yellow";
  box2.shapeColor = "pink";

  box1.velocityY = 1;
  box2.velocityY = -1;

  box3 = createSprite(100,200,50,50);
  box4 = createSprite(500,200,50,50);
  box3.shapeColor = "purple";
  box4.shapeColor = "brown";

  box3.velocityX = 1;
  box4.velocityX = -1;
  
}

function draw() {
  background("black"); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  //rectMode(CENTER);
  //rect(50,50,100,100);
  if(movingRect.x - fixedRect.x <= movingRect.width/2+fixedRect.width/2
    && fixedRect.x - movingRect.x <= movingRect.width/2+fixedRect.width/2
    && movingRect.y - fixedRect.y <= movingRect.height/2+fixedRect.height/2
    && fixedRect.y - movingRect.y <= movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  if(box1.y - box2.y <= box1.height/2+box2.height/2
    && box2.y - box1.y <= box1.height/2+box2.height/2){
      box1.velocityY = box1.velocityY*-1;
      box2.velocityY = box2.velocityY*-1; 
  }
  if(box3.x - box4.x <= box3.width/2+box4.width/2
    && box4.x - box3.x <= box3.width/2+box4.width/2){
      box3.velocityX = box3.velocityX*-1;
      box4.velocityX = box4.velocityX*-1; 
  }
  drawSprites();
}