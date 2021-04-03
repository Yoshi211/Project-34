const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImage;

function preload() {
  backgroundImage = loadImage("sky.jpeg");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1500,750,3000,20);
  hero1 = new hero(200,500,200,150);
  rope = new flying(hero1.body,{x:200, y:500})

  block1 = new block(600,600,50,50); 
  block2 = new block(600,550,50,50);
  block3 = new block(600,500,50,50);
  block4 = new block(600,450,50,50);
  block5 = new block(600,400,50,50);
  block6 = new block(600,350,50,50);
  block7 = new block(600,300,50,50);
  block8 = new block(600,250,50,50);
  block9 = new block(600,200,50,50);

  block10 = new block(800,600,50,50); 
  block12 = new block(800,550,50,50);
  block13 = new block(800,500,50,50);
  block14 = new block(800,450,50,50);
  block15 = new block(800,400,50,50);
  block16 = new block(800,350,50,50);
  block17 = new block(800,300,50,50);
  block18 = new block(800,250,50,50);
  block19 = new block(800,200,50,50);

  Engine.run(engine);
}

function draw() {
  background(backgroundImage);

  ground.display();
  hero1.display()
  rope.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  rope.flyy();
}