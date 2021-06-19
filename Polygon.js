class Polygon {
    constructor(x, y, radius) {
      var options = {
          isStatic: false,
          restitution:0.8,
          friction:2.0,
          density:1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.image = loadImage("polygon.png")
      this.radius = radius
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position
      push();
      imageMode(CENTER);
      image(this.image,pos.x,pos.y, 50,50);
      pop();
    }
  };
  