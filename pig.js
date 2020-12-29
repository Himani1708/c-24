class Pig{
    constructor(x,y){
        var options={
            'restitution':0.8,
            'friction':0.3,
            'density':1
        }

       this.pigbody=Bodies.rectangle(x,y,50,50,options);
       this.pigW=50;
       this.pigH=50;
       World.add(wld,this.pigbody)

    }

    display(){
        var pos = this.pigbody.position;
        var angle= this.pigbody.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        strokeWeight(4);
        stroke("white")
        fill("red");
        rect(0,0,this.pigW,this.pigH)
        pop();
    }

    
}