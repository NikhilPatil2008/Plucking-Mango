class Sling{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }
        this.pointB=pointB;
        this.bodyA=bodyA;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(bodyA){
        this.sling.bodyA=bodyA;
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
            var bodyA = this.sling.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(2);
            line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        }
    }
}