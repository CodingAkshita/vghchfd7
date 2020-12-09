class Mango{

    constructor(x,y,r)
    {
      var options = {
       isStatic:true,
       restitution:0,
       friction:1.0,
       density:1.2
      }
    
      this.x = x;
      this.y = y;
      this.r = 70;
      this.body = Bodies.circle(this.x,this.y,70,options);
      this.image = loadImage("mango.png");
      World.add(world, this.body);
    
    }
    display()
    
    {
        var Mangopos = this.body.position;
    
        push();
        translate(Mangopos.x,Mangopos.y);
        imageMode(CENTER);
        image(this.image,0,45,70,70);
        pop();
    
    
    }
    }

    