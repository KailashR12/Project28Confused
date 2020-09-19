
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var boy = createSprite(400,650,20,25);
	ground = new Ground(600,height,1200,20);
	stoneObj = new Stone(400,650,7,7);
	mango1 = new Mango(700,650);
	mango2 = new Mango(710,650);
	mango3 = new Mango(690,650);
	mango4 = new Mango(700,640);
	mango5 = new Mango(700,660);
	slingshot = new Slingshot(stoneObj.body,{x:200,y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);

ground.display();
stoneObj.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
slingshot.display();




  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		if (distance<=lmango.r+lstone.r){
			Matter.Body.setStatic(lmango.body,false);
		}
}
function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x:235,y:420})
		launcherObject.attach(stoneObj.body);
	}
}

