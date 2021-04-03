class flying{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.fly = Constraint.create(options);
        World.add(world, this.fly);
    }
    attach(body){
        this.fly.bodyA = body;
    }

    flyy(){
        this.fly.bodyA = null;
    }

    display(){
        if(this.fly.bodyA){
            var pointA = this.fly.bodyA.position;
            var pointB = this.pointB;
            push(); 
            stroke(0,50,50);
           // if(pointA.x < 220) {
                strokeWeight(0);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                // line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
           // }
            // else{
            //     strokeWeight(3);
            //     line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
            //     line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
            // } 
            pop();
        }
    }
    
}