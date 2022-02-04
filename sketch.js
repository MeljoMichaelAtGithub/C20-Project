var Background,bg_img,sleep,brush,gym,gym1,eat,drink,bath,move;
var astronaut;
var edges;

function preload() {
  bg_img = loadAnimation("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png");
  gym1 = loadAnimation("images/gym11.png","images/gym12.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  move = loadAnimation("images/move.png");
  bath = loadAnimation("images/bath1.png","images/bath1.png")
}

function setup() {
  createCanvas(1930,970);
  Background = createSprite(965,485,900,1000);
  Background.addAnimation("bg", bg_img);
  Background.scale = 0.4;

  astronaut = createSprite(900,700);
  astronaut.addAnimation("sleeping" , sleep);
  astronaut.addAnimation("brushing" , brush);
  astronaut.addAnimation("gym" , gym);
  astronaut.addAnimation("gym1" , gym1);
  astronaut.addAnimation("eating" , eat);
  astronaut.addAnimation("drinking" , drink);
  astronaut.addAnimation("moving" , move);
  astronaut.addAnimation("bathing",bath);
  astronaut. scale = 0.1;

}

function draw() {
  background(255,255,255);  

  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing" , brush);
    astronaut. changeAnimation("brushing" );
    astronaut.y = 700;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  } 

  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gym" , gym);
    astronaut. changeAnimation("gym" );
    astronaut.y = 700;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  } 

  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating" , eat);
    astronaut. changeAnimation("eating" );
    astronaut.y = 700;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  } 

  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing" , bath);
    astronaut. changeAnimation("bathing" );
    astronaut.y = 700;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  } 

  if (keyIsDown("77")){
    astronaut.addAnimation("moving" , move);
    astronaut. changeAnimation("moving");
    astronaut.y = 700;
    astronaut.velocityX = 3;
    astronaut.velocityY = 0;
  }

  if (keyIsDown("78")){
    astronaut.addAnimation("gym1" , gym1);
    astronaut. changeAnimation("gym1");
    astronaut.y = 700;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  drawSprites();
}