var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

var score =0;

var turn = 0;

var particle;

var PLAY = 0;
var END = 1;
var gamestate = PLAY;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   //}
 
  //for (var j = 0; j < particles.length; j++) {
   
    // particles[j].display();
   //}
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

    fill("red")
     text("score:"+ score, 175, 50)

     text("500",20,720);
     text("500",110,720);
     text("500",200,720);
     text("100",270,720);
     text("100",350,720);
     text("100",430,720);
     text("200",600,720);
     text("200",520,720);
     text("200",680,720);
     text("200",750,720);

     fill("yellow");
     rect(400,500,800,5);

     if(particle != null){
         particle.display();

        if(particle.body.position.y>760){
          if(particle.body.position.x<230 && particle.body.position.x>0){
            score=score+500;
          
            if(turn>=5){gamestate = END}
          }
          if(particle.body.position.x>230 && particle.body.position.x<560){
            score=score+100;
          
            if(turn>=5){gamestate = END}
          }
          if(particle.body.position.x>560 && particle.body.position.x<800){
            score=score+200;
         
            if(turn>=5){gamestate = END}
            fill("white");
            textSize(30);
            text("GAME OVER!", width/2, height/2-70)
            
          }
        }
     }
  
/*if(particle != null){
 particle.display();

if(particle.body.position.y>760){
  if(particle.body.postion.x<0){
    score=score+500;
    particle=null;
    if(turn>=5){gamestate}
  }
}
}

if(particle != null){
  particle.display();

 if(particle.body.position.y>760){
   if(particle.body.postion.x<530){
     score=score+200;
     particle=null;
     if(turn>=5){gamestate}
   }
 }
}
if(particle != null){
particle.display();

if(particle.body.position.y>760){
if(particle.body.postion.x<0){
  score=score+500;
  particle=null;
  if(turn>=5){gamestate}
}
}
}


  
   }/*/
}}

function mousePressed(){
  if(gamestate!==END){
    turn++;
    particle = new Particle(mouseX, 10, 10, 10);
  }

}