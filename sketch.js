const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var backgroundImg;
var backgroundI;
var snowA;

function preload(){
backgroundI=loadImage("snow1.jpg")
}

function setup() {
  createCanvas(990,700);
  engine=Engine.create();
  world=engine.world;

  snowA=new snow(100,100,300);
  backgroundImg=createSprite(495, 370, 1000, 800);
  backgroundImg.addImage(backgroundI);
  backgroundImg.scale=1.95;

  Engine.run(engine);
}

function draw() {
  background(0);  
  drawSprites();

  snowA.display();
  
}