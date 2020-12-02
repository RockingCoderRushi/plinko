const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground1

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(240,790,480,10)
    
}

function draw() {
  background(255,255,255);  
  drawSprites();

  ground1.display()
}