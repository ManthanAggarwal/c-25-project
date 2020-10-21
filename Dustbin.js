class Dustbin {
    constructor(x,y,w,h){
   this.body = Matter.Bodies.rectangle(x,y,w,h,{isStatic:true});
   Matter.World.add(wr,this.body);
   this.width = w;
   this.height = h;
   this.image = loadImage("dustbingreen.png")
    }


    show(){
      push();
      fill("blue");
      imageMode(CENTER);
      image(this.image,570,520,160,120);
      pop() 
    }
}