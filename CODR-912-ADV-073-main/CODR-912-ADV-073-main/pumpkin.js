class Pumpkin {
 constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        Composite.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos =this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
      }
}
