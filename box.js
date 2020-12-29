class Box{
    constructor(x,y,width,height){
        var options={
            'restitution':0.8,
            'friction':0.3,
            'density':1
        }

       this.boxbody=Bodies.rectangle(x,y,width,height,options);
       this.boxW=width;
       this.boxH=height;
       World.add(wld,this.boxbody)

    }

    display(){
        var pos = this.boxbody.position;
        var angle= this.boxbody.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green")
        fill(255);
        rect(0,0,this.boxW,this.boxH)
        pop();
    }

    
}