
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;


function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,250,400,20);
    bob1 = new Bob(270,450);
	bob2 = new Bob(330,450);
	bob3 = new Bob(390,450);
	bob4 = new Bob(450,450);
	bob5 = new Bob(510,450);
	
	rope1 = new Rope(bob1.body,ground.body,-135,10);
	rope2 = new Rope(bob2.body,ground.body,-75,10);
	rope3 = new Rope(bob3.body,ground.body,-15,10);
	rope4 = new Rope(bob4.body,ground.body,45,10);
	rope5 = new Rope(bob5.body,ground.body,105,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-20, y:0});
	}
}

