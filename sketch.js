const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var chaopotter;
var hogwartspassado;
var castelomagico, castelomagicofoto;

function preload() {
 hogwartspassado = loadImage("./assets/background.gif");
 castelomagicofoto = loadImage("./assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  chaopotter_options = {
    isStatic: true
  }

  chaopotter = Bodies.rectangle(0, height-1, width*2, 1, chaopotter_options);
  World.add(world, chaopotter);

  castelomagico = Bodies.rectangle(160, 350, 160, 310, chaopotter_options);
  World.add(world, castelomagico);
 
}

function draw() {
  background(189);
  image(hogwartspassado, 0, 0, 1200, 600);
 
  Engine.update(engine);
  
  rect(chaopotter.position.x, chaopotter.position.y, width*2, 1);

  push();
  imageMode(CENTER);
  image(castelomagicofoto, castelomagico.position.x, castelomagico.position.y, 160, 310);
  pop();
}
