class Paper {
    constructor(x,y,r){
        var options = {

            restitution: 0,
            density: 1.5,
            friction: 0,
        }
   this.body = Matter.Bodies.circle(x,y,r,options);
   Matter.World.add(wr,this.body);
   this.radius = r;
   this.image = loadImage("paper.png")
    }


    show(){
      push();
      fill("green");
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,40,40);
      pop() 
    }
}



















