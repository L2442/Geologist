class Hammer {
constructor(x,y){

 var options={

'restitution':0.2,
'friction':4,
'density':5
 }
this.body= Bodies.rectangle(x,y,50,30,options);
this.width=50;
this.height=30;
World.add(world,this.body);

}
display(){

var pos=this.body.position;
pos.x=mouseX;
pos.y=mouseY;
var angle= this.body.angle;
push ();
translate(pos.x,pos.y);
rotate(angle);
fill("brown");
rect(0,0,this.width,this.height);
pop();
}


}