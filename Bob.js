class Bob {
    constructor(x, y, width, height) {
      var options = {
          setStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
    
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.radius = 60;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(225);
      circle(0, 0, this.radius);
      pop();
    }
  };