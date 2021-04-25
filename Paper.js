class Paper{
    constructor(x, y, width, height, bodyA){
        var options={
            bodyA: bodyA,
            isStatic:false,
            'restitution':0.3,
            'friction': 0.5,
            'density': 1.2
             
        }
        this.x=x;
        this.y=y;
        //this.paperObject.body=Bodies.circle(x,y,width,height, options);
        this.width= 100;
        this.height=90;
        this.image=loadImage("paper.png");
       // World.add(world, this.paperObject.body);
        
    }

    fly(){
        this.paperObject.bodyA = null;
    }
    display(){
        
        push();
       // translate(this.paperObject.body.position.x, this.paperObject.body.position.y);
        imageMode(CENTER);
        image(this.image, 350,632, this.width, this.height);
        pop();
        
    }
    
}