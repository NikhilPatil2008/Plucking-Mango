
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var boyimage;
var world,engine;
var stone,sling,mango1,mango2,mango3,mango4,mango5,mango6,mango7,ground,treeObj;
var lauchingfor=100;

function preload()
{
	boyimage=loadImage("images/boy.png");
}

function setup() {
	var canvas=createCanvas(1300, 800);
	engine = Engine.create();
    world = engine.world;

	var boy=createSprite(150,480,20,20);
	boy.addImage(boyimage);
	boy.scale=0.1;

	ground = new Ground(width/2,600,width,20);
	mango1=new Mango(1100,100,30);
  	mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,40);
	stone=new Stone(235,420,30);
	sling=new Sling(stone.body,{x:235,y:420});
	treeObj=new Tree(1050,580);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	})

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine);
  treeObj.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  sling.display();
  stone.display();
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);

  drawSprites();
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	sling.fly();
    distance=int(dist(stone.x,stone.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  sling.attach(stone.body);
	}
  }

  function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }


