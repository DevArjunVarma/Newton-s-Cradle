class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY},
            length: 200
        }
        this.rope1 = Constraint.create(options);
        World.add(world, this.rope1);
    }



    display(){
       var pointA=this.rope1.bodyA.position;
       var pointB=this.rope1.bodyB.position;

       stroke(225);
       strokeWeight(2);

       var Anchor1X=pointA.x;
       var Anchor1Y=pointA.y;

       var Anchor2X=pointB.x+this.offsetX;
       var Anchor2Y=pointB.y+this.offsetY;
       
       line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}