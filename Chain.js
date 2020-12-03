class Chain  {

    constructor(firstBody, secondBody){
        var options ={
            bodyA : firstBody,
            bodyB : secondBody,
            stiffness: 0.4,
            length: 200
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);

    }
        display(){

        strokeWeight(8)

        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y )
            


        }
     
    
}