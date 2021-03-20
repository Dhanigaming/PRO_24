class Sand {
    constructor(x, y, r) {
      var options = {
       
        
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.x=x;
      this.y=y;
      this.r =r;
      this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
     
      rectMode(CENTER);
      strokeWeight(15);
      stroke("voilet");
      fill("blue");
      ellipse(0,0,this.r, this.r);
      pop();
    }
  };
  