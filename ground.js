class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.groundBody=Bodies.rectangle(x,y,width,height,options)
        this.GroundW=width;
        this.GroundH=height;
        World.add(wld,this.groundBody)
    }
    display(){

        var pos=this.groundBody.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.GroundW,this.GroundH)

    }
}