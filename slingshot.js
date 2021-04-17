class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //polygon = Bodies.circle(50,200,20);
        //this.polygon = loadImage("sprites/polygon.png");
        World.add(world,this.polygon);
        
        //this.polygon = loadImage("sprites/polygon.png");
        this.pointB = pointB;
        this.polygon = Constraint.create(options);
        World.add(world, this.polygon);
    }

    fly(){
        this.polygon.bodyA = null;
    }

    display(){
        
       // image(polygon_img,polygon.postiton.x,polygon.position.y,40,40);

        if(this.polygon.bodyA){
            var pointA = this.polygon.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8);
            if(pointA.x<220){
                strokeWeight(7);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20,pointA.y, pointB.x+30, pointB.y-3);
            } 
            else{
                strokeWeight(3);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25,pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3,pointA.x+25,pointA.y-10,15,30);   
            }
            pop();

        }
    }
    
}