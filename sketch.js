
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bg;

var ball;
var ball_img;

function preload() {
  bg  = loadImage("bg.png");
  ball_img = loadImage("ball.png");
}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  background(bg);
  Engine.update(engine);
  
}

