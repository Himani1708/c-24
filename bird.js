class Bird{
    constructor(x,y){
        var options={
            'restitution':0.5,
            'friction':1,
            'density':1.5
        }

       this.birdbody=Bodies.rectangle(x,y,50,50,options);
       this.birdW=50;
       this.birdH=50;
       World.add(wld,this.birdbody)

    }

    display(){
        var pos = this.birdbody.position;
        pos.x=mouseX
        pos.y=mouseY
        var angle= this.birdbody.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        strokeWeight(4);
        stroke("white")
        fill("green");
        rect(0,0,this.birdW,this.birdH)
        pop();
    }

    
}