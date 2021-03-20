
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;

var ham,rub,one,ground;
var sand1,sand2,sand3
var sand4,sand5,sand6


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	one = new stone(500,600,50,50);
	ham = new hammer(10,100);
	rub = new rubber(1100,500,70);
	sand1 = new Sand(500,450,10);
	sand2 = new Sand(510,450,10);
	sand3 = new Sand(520,450,10);
	sand4 = new Sand(530,450,10);
	sand5 = new Sand(540,450,10);
	sand6 = new Sand(550,450,10);


	//Engine.run(engine);
  
}


function draw() {
 
  background(0);
  Engine.update(engine);
  ground.display();
  ham.display();
  rub.display();
  one.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  
  
  
  
 
}



