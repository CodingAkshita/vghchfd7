
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;


function preload()
{
	
}

function setup() {
	createCanvas(1370, 600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1540,20);
	
	tree = new Tree(750,200,700);

	mango1 = new Mango(1000,100,70);
	mango2 = new Mango(920,130,70);
	mango3 = new Mango(900,170,70);
	mango4 = new Mango(1020,30,70);
	mango5 = new Mango(1010,220,70);
	mango6 = new Mango(1100,210,70);
	mango7 = new Mango(1140,50,70);
	mango8 = new Mango(1150,10,70);
	mango9 = new Mango(1190,90,70);
	mango10 = new Mango(1200,150,70);
	mango11 = new Mango(1300,180,70);

  boy = new Boy(250,520,20);
  
  stone = new Stone(100,100,70)

	slingShot = new Slingshot(stone.body,{x:170,y:360})


	



	var render = Render.create({
		element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgray");
  Engine.update(engine);
  
  ground.display()

  tree.display()

  mango1.display()
  mango3.display()
  mango2.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  mango11.display()

  boy.display();

  stone.display()
  
  slingShot.display()

  keyPressed();
  
  
  
  textSize(20)
  fill("black")
  text("Press Space to get a second Chance to Play!!",100,50)
  

  drawSprites();
 
}

function mouseDragged(){

  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
      
  }
  
  function mouseReleased(){
  
      slingShot.fly();
  }

  function keyPressed(){

  if(keyCode === 32){

    Matter.body.setPosition(stone.body, {x:235, y:420})

  }
  }

 


