const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground
function setup(){
    var canvas=createCanvas(700,700);
    engine = Engine.create();
    world = engine.world;
    //ground=new Ground(600,350,700,20);
}
function draw(){
    background(0);
    Engine.update(engine);
    //ground.display();
}