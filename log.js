class Log{
    constructor(x,y,height,angle){
        var options={
            'restitution':0.8,
            'friction':0.3,
            'density':1
        }

       this.logbody=Bodies.rectangle(x,y,20,height,options);
       this.logW=20;
       this.logH=height;
       Matter.Body.setAngle(this.logbody,angle)
       World.add(wld,this.logbody)

    }

    display(){
        var pos = this.logbody.position;
        var angle= this.logbody.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green")
        fill(255);
        rect(0,0,this.logW,this.logH)
        pop();
    }

    
}