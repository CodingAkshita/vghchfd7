class Tree{

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
      this.body = Bodies.rectangle(this.x,this.y,70,options);
      this.image = loadImage("tree.png");
      World.add(world, this.body);
    
    }
    display()
    
    {
        var Treepos = this.body.position;
    
        push();
        translate(Treepos.x,Treepos.y);
        imageMode(CENTER);
        image(this.image,1100,300,500,600);
        pop();
    
    
    }
    }