class Circle{
    constructor(){
        var options={
            friction:0.5,
            density:1.0,
            restitution:0.8
        }
        this.body=Bodies.circle(150,200,20,options);
        World.add(world,this.body);
    }
    display(){
        this.pos=this.body.position;
        push();
        fill("red")
        translate(this.pos.x,this.pos.y)
        ellipseMode(CENTER);
        ellipse(0,0,40,40);
        pop();
    }
}