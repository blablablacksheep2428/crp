class Dust{
    constructor(x,y) {
        this.x=x;
        this.y=y;
        var options = {
        isStatic:true
        }
        this.leftbody = Bodies.rectangle(this.x-50, this.y+100,20,100,options);
        this.rightbody = Bodies.rectangle(this.x+50, this.y+50,20,200,options);
        this.bottombody = Bodies.rectangle(this.x, this.y,200,20,options);
        //this.width=width;
        //this.height=height;
        this.image = loadImage("sprites/dustbingreen.png");
        World.add(world, this.leftbody);
        World.add(world, this.rightbody);
        World.add(world, this.bottombody);
      }
      display(){
        imageMode(CENTER);
       /* rect( this.x-50, this.y+100,20,100);
        rect(this.x+50, this.y+50,20,200);
          rect(this.x, this.y+150,117,20);*/
        image(this.image,this.x,this.y)
      }
}
