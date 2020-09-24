const Engine=Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var ourEngine,ourWorld;
var box1,box2;
var ground1;
function setup() {
  createCanvas(400,400);
  ourEngine=Engine.create();
  ourWorld=ourEngine.world;
  box1=new box(230,300,50,50);
  box2=new box(200,100,50,50);
  ground1 = new ground(200,380,400,40);
  //console.log(object.position.x);
}

function draw() {
  background("blue");
  Engine.update(ourEngine);
  box1.display();
  box2.display();
  ground1.display();
}