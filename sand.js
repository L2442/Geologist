class Sand {
    constructor(x,y){
    
     var options={
    
    'restitution':0.2,
    'friction':4,
    'density':1
     }
    this.body= Bodies.circle(x,y,20,options);
    this.radius=20;
    World.add(world,this.body);
    
    }
    display(){
    
    var pos=this.body.position;
    
    var angle= this.body.angle;
    push ();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("yellow");
    ellipse(0,0,this.radius,this.radius);
    pop();
    }
    
    
    }
