
var eng,wr,ground



function setup() {
	createCanvas(700, 600);


	eng = Matter.Engine.create();
	console.log(eng);
    wr = eng.world

	//Create the Bodies Here.
	ground = Matter.Bodies.rectangle(400,590,800,20,{isStatic:true});
	Matter.World.add(wr,ground);

	console.log(ground);
  
  bottomside = new Dustbin(530,570,130,20);
  left = new Dustbin(640,540,20,5)
  paper = new Paper(55,580,20);

}


function draw() {
  background(0);
  Matter.Engine.update(eng);
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  
  bottomside.show();
  paper.show();
  left.show();
  }





  function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position, {x:80, y:-50});

  }
  
  }



