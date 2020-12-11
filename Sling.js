class Sling{
    constructor(bodyA, anchor){
        var options = {
            bodyA: bodyA,
            pointB: anchor,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.anchor = anchor
        World.add(world, this.sling);
    }
     fly(){
     this.sling.bodyA = null
     }
    display(){
        if(this.sling.bodyA){
         
        
        var pointA = this.sling.bodyA.position;
        var pointB = this.anchor;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }}
    
}