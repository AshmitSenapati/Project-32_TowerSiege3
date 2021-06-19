class Box {
  constructor(x, y, width, height) {
    var options = {
        isStatic: false,
        restitution:0.8,
        friction:2.0,
        density:1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    World.add(world, this.body);
  }
  score() {
    if(this.visibility < 0 && this.visibility > -105){
      score++;
    }
  }
  display(){
    var pos = this.body.position
    if (this.body.speed < 3) {
    push();
    stroke("black")
    strokeWeight(5)
    rectMode(CENTER);
    rect(pos.x,pos.y, this.width, this.height);
    pop();
    }
    else {
      World.remove(world, this.body);
      push()
      this.visibility = this.visibility - 5;
      tint(255,this.visibility)
      //rect(pos.x,pos.y,this.width,this.height)
      pop()
    }
  }
};
