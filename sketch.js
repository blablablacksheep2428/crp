
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,dust1;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new Ground(400,680,800,20);
	paper1=new Paper(200,350,20)
    dust1=new Dust(500,500);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paper1.display();
  dust1.display();
  ground1.display();

  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})

}

}

