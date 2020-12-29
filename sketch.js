//name spacing
const Engine= Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var eng, wld;
var box1,box2;
var pig1;
var log1;
var bird1;
var ground1;

function setup() {
  createCanvas(1200,400);
  eng=Engine.create();
  wld=eng.world;

  ground1= new Ground(600,height,1200,20);
  
  box1= new Box(700,320,70,70);
  box2= new Box(920,320,70,70);

  pig1= new Pig(810,350);

  log1= new Log(810,260,300,PI/2)

  bird1= new Bird(100,100);
  
}

function draw() {
  Engine.update(eng);
  background(0);  
  
  box1.display();
  box2.display();
  ground1.display();
  pig1.display();
  log1.display();
  bird1.display();
  
}