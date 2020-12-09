class Boy{

    constructor(x,y,r)
    
    {
      var options = {
       isStatic:true,
       restitution:0.7,
       friction:0.5,
       density:1.2
      }
    
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x,this.y,20,options);
      this.image = loadImage("boy.png");
      World.add(world, this.body);
    
    }
    display()
    
    {
        var Boypos = this.body.position;
    
        push();
        translate(Boypos.x,Boypos.y);
        imageMode(CENTER);
        image(this.image,0,-20,250,350);
        pop();
    
    
    }
    }