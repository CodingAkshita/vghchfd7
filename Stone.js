class Stone{

    constructor(x,y,r)
    {
      var options = {
       isStatic:false,
       restitution:0,
       friction:1.0,
       density:1.2
      }
    
      this.x = x;
      this.y = y;
      this.r = 70;
      this.body = Bodies.circle(this.x,this.y,70,options);
      this.image = loadImage("stone.png");
      World.add(world, this.body);
    
    }
    display()
    
    {
        var Stonepos = this.body.position;
    
        push();
        translate(Stonepos.x,Stonepos.y);
        imageMode(CENTER);
        image(this.image,0,45,50,50);
        pop();
    
    
    }
    }

    