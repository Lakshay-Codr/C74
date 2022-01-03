const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Composite=Matter.Composite;
var engine, world;
var ground, ball1,ball2,platform;
var pumpkin,ghst1,ghst2,log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    //create ground objects
    ground = new Ground(width/2,height-10,width,20)

    pumpkin = new Pumpkin(100,100,40,30);

    ghst1=new Ghost(1000,300,100,80);
    ghst2=new Ghost(800,300,100,80);
    log1=new Log(900,200,400,20,PI)

    
  
}

function draw(){
    background(0);
    Engine.update(engine);
    // to display the objects
    ground.display()
    pumpkin.display()
    ghst1.display()
    ghst2.display()
    log1.display()
   
}